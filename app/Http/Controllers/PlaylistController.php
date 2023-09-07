<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\Topic;
use App\Models\Video;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use Google_Client;
use Google_Service_YouTube;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use phpseclib3\Common\Functions\Strings;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use Response;
use Illuminate\Support\Facades\Log;

class PlaylistController extends Controller
{
    private $youtube;
    public $varArrayFiles;

    /**
     * PlaylistController constructor.
     */
    public function __construct()
    {

        // $this->client = new Google_Client();
        // $this->client->setDeveloperKey('AIzaSyAekVZGQdFN00o79JAx-SSV-15ad_Nv23A');
        // $this->youtube = new Google_Service_YouTube($this->client);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return $this->AddManualPlaylist($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\playlist $playlist
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $topics = Topic::wherePlaylistId($id)->get();
        // $playlistsVideojs = [];

        // foreach ($topics as $topic) {
        //     // $playlistVideojs = [];
        //     $video = Video::whereTopicId($topic->id)->first();
        //     $playlistsVideojs[] =  $video->youtube_id;
        //     // $playlistVideojs["id"] = $video->YoutubeID;
        //     // $playlistVideojs["name"] = $video->Title;
        //     // $playlistVideojs["description"] = "";
        //     // $playlistVideojs["duration"] = $video->Duration;
        //     // $playlistVideojs["sources"] = array(array("src"=> "https://www.youtube.com/watch?v=" . $video->Source_src, "type" => 'video/youtube' ));
        //     // $playlistVideojs["thumbnail"] = array(array("srcset"=> "", "src" => '', "type"=>'image/jpeg',"media"=>'(min-width: 400px;)' ));
        //     // $playlistsVideojs[] = $playlistVideojs;
        // }

        // $videoslist = json_encode($playlistsVideojs, JSON_UNESCAPED_SLASHES);
        // $arr = [1, 2, 3, 4, 5];

        // $teste = "['" . implode("','", $playlistsVideojs) . "']";

        // $videos1 = json_encode($playlistsVideojs, JSON_HEX_QUOT);
        // return view('playlist.show', ['videos' => $videos1, 'items' => $videos]);

       $topics = Video::whereplaylist_id($id)->get();
       $topicstring = "";
       foreach ($topics as $topic ) {

        $topicstring =  $topicstring . $topic->title;

       }


        return view('playlist.show', ['playlistid' => $id], ['topics' => $topics ] );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\playlist $playlist
     * @return \Illuminate\Http\Response
     */
    public function edit(playlist $playlist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\playlist $playlist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, playlist $playlist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\playlist $playlist
     * @return \Illuminate\Http\Response
     */
    public function destroy(playlist $playlist)
    {
    }

    public function additens($playlistSaveid)
    {
        $playlist = Playlist::find($playlistSaveid);
        $nextPageToken = '';

        $playlistName = Playlist::find($playlistSaveid);

        try {
            DB::beginTransaction();

            do {
                $playlistItemsResponse = $this->youtube->playlistItems->listPlaylistItems('id, snippet,contentDetails ', array(
                    'playlistId' => $playlist->playlist_id,
                    'maxResults' => 100,
                    'pageToken' => $nextPageToken
                ));
                $items = $playlistItemsResponse['items'];
                foreach ($items as $playlistItem) {
                    //$topic = $this->AddTopicChild($playlistItem, $playlistSaveid);

                    $this->AddVideo($playlistItem, 'playlist', $playlistSaveid);
                }
                $nextPageToken = $playlistItemsResponse['nextPageToken'];
            } while ($nextPageToken <> '');

            $playlist->video_count = Video::where('playlist_id', '=', $playlistSaveid)->count();
            $playlist->save();

            DB::commit();
        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
        }


        return $playlist;
    }

    public function addrange($id, Request $request)
    {

        $nextPageToken = '';


        $videoItemsResponse = $this->youtube->search->listSearch('snippet', array(
            'q' => $request->name,
            'type' => 'playlist',
            'maxResults' => 100,
            'pageToken' => $nextPageToken
        ));

        $items = $videoItemsResponse['items'];

        foreach ($items as $item) {

            $playlist = new Playlist();
            $playlist->playlist_id = $item->id->playlistId;
            $playlist->title = $item->snippet->title;
            $playlist->thumbnail = $item->snippet->thumbnails->default->url;
            $playlist->type = $item->id->kind;
            $playlist->published_at = date('Y-m-d h:i:s', strtotime($item->snippet->publishedAt));
            $playlist->description = $item->snippet->description;
            $playlist->kind = "";
            $playlist->video_count = 0;
            $playlist->category_id = $id;

            $playlist->save();
        }

        return redirect('/');
    }

    public function playslistCategory($id)
    {
        

        try {
            $playlists = Playlist::whereCategoryId($id)->get();
            return view('playlist.category', ['playlistId' => $id]);

        } catch (\Throwable $th) {
            Log::info('Erro PlaylistController playslistCategory method called');
        }

    }

    /**
     * @param $item
     * @param Request $request
     * @return playlist
     */
    public function SavePlaylist($item, $pid)
    {
        $playlist = new Playlist();
        $playlist->playlist_id = $item->id;
        $playlist->title = $item->snippet->title;
        $playlist->thumbnail = $item->snippet->thumbnails->default->url;
        $playlist->type = $item->kind;
        $playlist->published_At = date('Y-m-d h:i:s', strtotime($item->snippet->publishedAt));
        $playlist->description = $item->snippet->description;
        $playlist->kind = "";
        $playlist->video_count = 0;
        $playlist->category_id = $pid;
        $playlist->save();
        return $playlist;
    }




    /**
     * @param $item
     * @param $playlistSaveid
     * @return Topic
     */
    public function AddRootTopic($item, $playlistSaveid)
    {
        $topicRoot = new Topic();
        $topicRoot->text = $item->snippet->title;
        $topicRoot->parent_id = 0;
        $topicRoot->playlist_id = $playlistSaveid;
        $topicRoot->position = 1;
        $topicRoot->save();
        return $topicRoot;
    }

    /**
     * @param $playlistItem
     * @param Topic $topicRoot
     * @param $playlistSaveid
     * @return Topic
     */
    public function AddTopicChild($playlistItem, $playlistSaveid)
    {
        $topic = new Topic();
        $topic->topic_name = $playlistItem->snippet->title;
        // $topic->parent_id = $topicRoot->id;
        $topic->parent_id = 0;
        $topic->playlist_id = $playlistSaveid;
        $topic->save();


        return $topic;
    }

    /**
     * @param $playlistItem
     * @param Topic $topic
     */
    public function AddVideo($playlistItem, $type, $playlistSaveid)
    {
        $video = new Video();


        $videoId = $playlistItem->snippet->resourceId->videoId;

        do {
            $videoId = $playlistItem->snippet->resourceId->videoId;
        } while ($videoId == Null);

        switch ($type) {
            case 'playlist':

                $video->youtube_id = $videoId;

                $video->title = $playlistItem->snippet->title;
                $video->description = $playlistItem->snippet->description;
                $video->duration = "";
                $video->thumbnail_type = 'image/jpeg';
                $video->thumbnail_media = '(min-width: 400px;)';
                //$video->topic_id = $topic->id;

                //todo  corrigir
                try {
                    $video->thumbnail_src = $playlistItem->snippet->thumbnails->medium->url;
                } catch (\Throwable $th) {
                    $video->thumbnail_src = "erro";
                    //throw $th;
                }

                $video->source_src = $videoId;
                $video->source_type = 'video/youtube';
                $video->channel_id = $playlistItem->snippet->channelId;
                $video->published_at = date('Y-m-d h:i:s', strtotime($playlistItem->snippet->publishedAt));
                $video->playlist_id = $playlistSaveid;
                // $video->playlist_id = $id;
                break;

            case 'video':

                $video->youtube_id = $videoId;
                $video->source_src = $videoId;
                echo $video->youtube_id;
                $video->title = $playlistItem->snippet->title;
                $video->description = $playlistItem->snippet->description;
                $video->duration = "";
                $video->thumbnail_type = 'image/jpeg';
                $video->thumbnail_media = '(min-width: 400px;)';
                $video->playlist_id = $playlistSaveid;
                //$video->topic_id = $topic->id;
                //todo  corrigir
                try {
                    $video->thumbnail_src = $playlistItem->snippet->thumbnails->medium->url;
                } catch (\Throwable $th) {
                    $video->thumbnail_src = "erro";
                    //throw $th;
                }
                //$video->source_src = $playlistItem->id->videoId;
                $video->source_type = 'video/youtube';
                $video->channel_id = $playlistItem->snippet->channelId;
                $video->published_at = date('Y-m-d h:i:s', strtotime($playlistItem->snippet->publishedAt));
                // $video->playlist_id = $id;

                break;
        }

        $video->save();
        return $video;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Throwable
     */
    public function AddManualPlaylist(Request $request)
    {

        $playlistid = $request->playlistid;

        $this->AddPlaylist($playlistid, $request->pid);


    }

    public function NewPlaylist($title, $pid, $count)
    {
        $playlist = new Playlist();
        $playlist->playlist_id = "";
        $playlist->title = $title;
        $playlist->thumbnail = "";
        $playlist->type = "youtube#search";
        $playlist->published_At = date('Y-m-d H:i:s');
        $playlist->description = "";
        $playlist->kind = "";
        $playlist->video_count = $count;
        $playlist->category_id = $pid;
        $playlist->save();
        return $playlist;
    }

    public function teste()
    {
        return false;
    }

    public function GeneratePlaylistFromSearch($name, $pid)
    {
        $result = false;
        try {
            $playlist = $this->NewPlaylist($name, $pid, 100);
            $playlistSaveid = $playlist->id;
            $nextPageToken = '';

            do {
                $videoItemsResponse = $this->youtube->search->listSearch('snippet', array(
                    'q' => $name,
                    'type' => 'video',
                    'maxResults' => 100,
                    'pageToken' => $nextPageToken
                ));
                $videos = $videoItemsResponse['items'];

                $topicArray = [];
                $videoArray = [];

                foreach ($videos as $videoItem) {
                    $topic = $this->AddTopicChild($videoItem, $playlistSaveid);
                    $topicArray[] = $topic;
                    $videoArray[] = $this->AddVideo($videoItem, $topic, 'video');
                }
                $nextPageToken = $videoItemsResponse['nextPageToken'];
            } while ($nextPageToken <> '');
            $result = true;
        } catch (\Exception $e) {
            print $e;
        }
        return ['playlist' => $playlist, 'topics' => $topicArray, 'videos' => $videoArray];
    }

    public function callReadFile()
    {


        // Construct the iterator
        $it = new RecursiveDirectoryIterator('G:\\src\\PHPUnit and Predefined Variables in PHP\\');

        // Loop through files
        $files = [];
        foreach (new RecursiveIteratorIterator($it) as $file) {
            if ($file->getExtension() == 'mp4') {
                $files[] = $file->getfileName();
            }
        }

        return  $files;
    }

    public function callReadFile1()
    {


        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        $dir = 'G:\src\PHPUnit and Predefined Variables in PHP\[Tutsgalaxy.com] - PHPUnit and Predefined Variables in PHP';

        $GLOBALS['I'] = 0; // root folder given index 0

        $res = $this->dirToArray($dir, $GLOBALS['I']);

        //        return $res;

        //  Output array

        $this->displayArrayRecursively($res);
        $topicList = [];
        $videoList = [];

        foreach  ($this->varArrayFiles as $key => $value) {
            $topic = new Topic();
            $topic->text = $value['name'];
            $topic->parent_id = $value['parentId'];
            $topic->position = 1;


            if (array_key_exists("videoid", $value)) {
                $video = new Video();
                $video->youtube_id = $value['videoid'];
                $video->title = $value['name'];
                $video->description = '';
                $video->duration = time();
                $video->source_src = $value['videoid'];
                $video->source_type = $value['videoid'];
                $video->thumbnail_src = '';
                $video->thumbnail_media = '';
                $video->thumbnail_type = '';
                $video->channel_id = '';
                $video->published_at = '';
                $topicList[] = ['topic' =>  $topic, 'video' => $video];
            }else{
                $topicList[] = ['topic' =>  $topic];
            }


        }
        File::copy(public_path('exist/test.png'), public_path('copy/test_copy.png'));

        Storage::disk('public')->put('\videos\teste' . '.txt', '$data');
        dd($topicList);

    }

    /**
     * Recursive function to display members of array with indentation
     *
     * @param array $arr Array to process
     * @param string $indent indentation string
     */
    function displayArrayRecursively($arr, $indent = '')
    {
        if ($arr) {
            foreach ($arr as $key  => $value) {
                if (is_array($value)) {
                    $this->displayArrayRecursively($value, $indent . '--');
                    if (array_key_exists("name", $value)) {
                        //                        $varArrayFiles[] = $value['name'] . "\r\n";
                        $this->varArrayFiles[] = $value;
                    }
                }
            }
        }
    }
    public function dirToArray($dir, $parent)
    {
        $result = array();
        $cdir = scandir($dir);

        foreach ($cdir as $key => $value) {
            if (!in_array($value, array(".", ".."))) {
                if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) {
                    $result[] = ['name' => $value, 'id' => ++$GLOBALS['I'], 'parentId' => $parent]; // add folder index
                    $result[] = $this->dirToArray($dir . DIRECTORY_SEPARATOR . $value, $GLOBALS['I']);
                } else {
                    $ext = pathinfo($dir . DIRECTORY_SEPARATOR . $value, PATHINFO_EXTENSION);
                    if ($ext == 'mp4') {
                        $result[] = ['name' => $value, 'id' => ++$GLOBALS['I'], 'parentId' => $parent, 'videoid' => $this->GetUniqueID(), 'path' => $dir . DIRECTORY_SEPARATOR . $value]; // add folder index
                    }
                }
            }
        }

        return $result;
    }


    public function GetUniqueID()
    {

        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
        $result = '';
        for ($i = 0; $i < 11; $i++)
            $result .= $characters[mt_rand(0, 63)];


        return $result;
    }


    public function getDirContents($dir, &$results = array())
    {
        $files = scandir($dir);

        foreach ($files as $key => $value) {
            $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
            if (!is_dir($path)) {
                $results[] = $path;
            } else if ($value != "." && $value != "..") {
                $this->getDirContents($path, $results);
                $results[] = $path;
            }
        }

        return $results;
    }

    /**
     * @param $playlistid
     * @param Request $request
     * @throws \Throwable
     */
    public function AddPlaylist($playlistid, $pid): void
    {
        $playlistItemsResponse = $this->youtube->playlists->listPlaylists('id, snippet, contentDetails', array(
            'id' => $playlistid
        ));
        $items = $playlistItemsResponse['items'];

        // dd($items);
        $item = $items[0];


        try {
            DB::beginTransaction();

            $playlist = $this->SavePlaylist($item, $pid);

            $playlistSaveid = $playlist->id;

            $this->GetYoutubeApiData($playlist, $playlistSaveid);

            $playlist->video_count = Video::where('playlist_id', '=', $playlistSaveid)->count();
            $playlist->save();

            DB::commit();
        } catch (\Exception $e) {
            echo $e;
            DB::rollBack();
        }
    }

    /**
     * @param Playlist $playlist
     * @param int $playlistSaveid
     */
    public function GetYoutubeApiData(Playlist $playlist, int $playlistSaveid): void
    {
        $nextPageToken = '';
        // $topicRoot = $this->AddRootTopic($item, $playlistSaveid);
        do {
            $playlistItemsResponse = $this->youtube->playlistItems->listPlaylistItems('id, snippet,contentDetails ', array(
                'playlistId' => $playlist->playlist_id,
                'maxResults' => 100,
                'pageToken' => $nextPageToken
            ));
            $items = $playlistItemsResponse['items'];
            foreach ($items as $playlistItem) {
                //$topic = $this->AddTopicChild($playlistItem, $playlistSaveid);
                $this->AddVideo($playlistItem, "video", $playlistSaveid);
            }
            $nextPageToken = $playlistItemsResponse['nextPageToken'];
        } while ($nextPageToken <> '');
    }
}
