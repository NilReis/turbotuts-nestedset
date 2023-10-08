<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Marker;
use App\Models\Topic;
use App\Models\Video;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Throwable;
use YouTube\YouTubeDownloader;
use YouTube\Exception\YouTubeException;

use Google_Client;
use Google_Service_YouTube;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;

class TopicJson extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */

    public $currentId;

    public function index()
    {
        echo 'index';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        echo $request->abc;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show(Request $request)
    {
        // Obtem o ID do vídeo a partir da solicitação
        $videoId = $this->getVideoId($request);

        // Obtem o tempo do marcador a partir da solicitação
        $time = $this->getMarkerTime($request, $videoId);

        // Obtem as informações do vídeo a partir da solicitação
        $videoYoutube = $this->getVideoInformation($videoId);

        // Obtem o link de download do vídeo
        $downloadLink = $this->getDownloadLink($videoYoutube);

        $this->saveVideoFromUrl($downloadLink, $videoId . '.mp4');

        // Retorna as informações do vídeo
        return [
            'youtubeid' => "http://turbotuts-nestedset.test/storage/videos/videos/'$videoId . '.mp4'",
            'description' => str_replace(
                "\n",
                '</br>',
                $videoYoutube->description
            ),
            'time' => $time,
        ];
    }

    public function saveVideoFromUrl($url, $filename)
    {
        try {
            $client = new Client();
            $response = $client->get($url);

            if ($response->getStatusCode() == 200) {
                $fileContent = $response->getBody()->getContents();

                // Aqui, estamos armazenando o arquivo no disco 'local'. Você pode mudar isso conforme necessário.
                Storage::disk('local')->put(
                    '/public/videos/' . $filename,
                    $fileContent
                );

                return $filename; // Retorne o nome do arquivo para referência futura
            } else {
                throw new \Exception("Failed to fetch the file from URL: $url");
            }
        } catch (\Exception $e) {
            // Aqui você pode lidar com a exceção, por exemplo, registrando o erro ou retornando uma resposta de erro
            Log::error(
                'An error occurred while saving the video from URL: ' .
                    $e->getMessage()
            );
            return null; // Você pode retornar uma resposta adequada aqui
        }
    }

    // Método para obter o ID do vídeo
    private function getVideoId(Request $request)
    {
        $videoId = $request->id;

        switch ($request->direction) {
            case 'next':
                $video = Video::find($request->id);
                $next = Video::where('id', '>', $video->id)->min('id');
                $videoId = $next;
                break;
            case 'previous':
                $video = Video::find($request->id);
                $previous = Video::where('id', '<', $video->id)->max('id');
                $videoId = $previous;
                break;
            default:
                break;
        }

        return $videoId;
    }

    // Método para obter o tempo do marcador
    private function getMarkerTime(Request $request, $videoId)
    {
        $time = '';
        if (str_contains($videoId, '-')) {
            $pieces = explode('-', $videoId);
            $marker = Marker::where('id', '=', $pieces[1])->first();
            $time = $marker->time;
        } else {
            $time = 0;
        }

        return $time;
    }

    // Método para obter as informações do vídeo
    private function getVideoInformation($videoId)
    {
        if (str_contains($videoId, '-')) {
            $pieces = explode('-', $videoId);
            $videoYoutube = Video::where('id', '=', $pieces[0])->first();
        } else {
            $videoYoutube = Video::where('id', '=', $videoId)->first();
        }

        return $videoYoutube;
    }
    private function getDownloadLink($videoYoutube)
    {
        $youtube = new YouTubeDownloader();

        try {
            $downloadOptions = $youtube->getDownloadLinks(
                'https://www.youtube.com/watch?v=' . $videoYoutube->youtube_id
            );

            if ($downloadOptions->getAllFormats()) {
                $varFilter = array_filter(
                    $downloadOptions->getAllFormats(),
                    function ($v, $k) {
                        return $k == $k && $v->quality == 'hd720';
                    },
                    ARRAY_FILTER_USE_BOTH
                );

                $numericIndexedArray = array_values($varFilter);
                return $numericIndexedArray[0]->url;
            } else {
                return null;
            }
        } catch (YouTubeException $e) {
            return null;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        echo 'teste';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    public function load($id)
    {
        $video = Video::where('playlist_id', '=', $id)->get();
        $marker = Marker::where('playlist_id', '=', $id)
            ->orderBy('video_id', 'asc')
            ->orderBy('time', 'asc')
            ->get();

        $dataTree = [];
        foreach ($video as $vd) {
            $data['id'] = $vd->id;
            $data['parent'] = null;
            $data['text'] = $vd->title;
            $data['test'] = 'teste';
            $dataTree[] = $data;
            foreach ($marker as $mk) {
                if ($mk->video_id == $vd->id) {
                    $data['id'] = $vd->id . '-' . $mk->id;
                    $data['parent'] = $vd->id;
                    $data['text'] = $mk->label;
                    $data['test'] = 'teste';

                    $dataTree[] = $data;
                }
            }
        }

        $json_data = json_encode($dataTree);

        return $dataTree;

        // $topic = Topic::where('playlist_id', '=', $id)->orderByDesc('position')->get();

        // $dataTree = [];

        // foreach ($topic as $tp ) {
        //     $data ["id"] = $tp->id;
        //     $data ["parent"] = $tp->parent_id;
        //     $data ["text"] = $tp->topic_name;
        //     $dataTree[] = $data;
        // }

        // $json_data = json_encode($dataTree);

        // return $dataTree;

        // try {
        //     /* Database connection start */
        //     $servername = "localhost";
        //     $username = "root";
        //     $password = "";
        //     $dbname = "turbotuts-nestedset";
        //     $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
        //     $conn->set_charset("utf8");

        //     if (mysqli_connect_errno()) {
        //         printf("Connect failed: %s\n", mysqli_connect_error());
        //         exit();
        //     }

        //     // $topics = Topic::whereplaylist_Id($id)->get();

        //     $sql = "SELECT * FROM `topics` where playlist_id = $id";
        //     $res = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
        //     //iterate on results row and create new index array of data
        //     while ($row = mysqli_fetch_assoc($res)) {
        //         $data[] = $row;
        //     }
        //     $itemsByReference = array();

        //     $counter = 0;
        //     // $numberOfItems =  count($data);
        //     // Build array of item references:

        //     foreach ($data as $key => &$item) {
        //         $counter++;
        //         //  echo  $counter . " " . $numberOfItems;
        //         $itemsByReference[$item['id']] = &$item;
        //         // Children array:
        //         // $itemsByReference[$item['id']]['submenu'] = array();
        //         // Empty data class (so that json_encode adds "data: {}" )
        //         // $itemsByReference[$item['id']]['data'] = [];
        //     }

        //     // Set items as children of the relevant parent item.
        //     foreach ($data as $key => &$item)

        //         if ($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
        //             $itemsByReference[$item['parent_id']]['children'][] = &$item;

        //     // Remove items that were added to parents elsewhere:
        //     foreach ($data as $key => &$item) {
        //         if ($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
        //             unset($data[$key]);
        //     }

        //     //  return  json_encode($data, JSON_INVALID_UTF8_SUBSTITUTE);
        //     // $js_array = json_encode( $data, JSON_HEX_APOS|JSON_HEX_QUOT|JSON_UNESCAPED_UNICODE);

        //     // encode array to json

        //     $json = json_encode(array('data' => $data));

        //     return   $data;

        //     //write json to file

        // } catch (\Throwable $th) {
        //     throw $th;
        // }
    }

    public function parse($data)
    {
        $temp = [];
        foreach ($data as $id => $v) {
            unset($v['parent_id']);
            $v['id'] = $id;
            $v['text'] = $v['name'];
            if (count($v['children'])) {
                $v['children'] = self::parse($v['children']);
            }
            $temp[] = $v;
        }
        return $temp;
    }

    public function getCurrentVideo($id)
    {
        $time = '';
        $this->currentId = $id;
        return $this->getVideoData($this->currentId);
    }

    public function NextVideo($id)
    {
        //dd($request);

        // get the current user
        $video = Video::find($id);
        //dd( $this->currentId);
        // get next user id
        $next = Video::where('id', '>', $video->id)->min('id');

        $this->currentId = $next;

        $time = '';

        return $this->getVideoData($this->currentId);
    }

    public function PreviuosVideo($id)
    {
        //dd($request);

        // get the current user
        $video = Video::find($id);
        // get next user id
        $previous = Video::where('id', '<', $video->id)->max('id');
        $id = $previous;

        $this->currentId = $id;

        $time = '';

        return $this->getVideoData($this->currentId);
    }

    public function move($var)
    {
        print_r($var);
    }

    public function impar($var)
    {
        return !($var & 1);
    }

    public function operation(Request $request)
    {
        try {
            if ($request->operation == 'move_node') {
                $category = Topic::find($request->id);
                $category->parent_id = $request->parent;
                $category->position = $request->position;
                $category->save();

                // dd($request);
            }

            if ($request->operation == 'create_node') {
                $category = new Topic();
                $category->text = $request->text;
                $category->parent_id = $request->parent;
                $category->icon = '';
                $category->url = '';
                $category->position = $request->position;
                $category->save();
            }

            if ($request->operation == 'rename_node') {
                $category = Topic::find($request->id);
                $category->text = $request->text;
                $category->save();
            }
        } catch (Throwable $th) {
            throw $th;
        }
    }

    public function buildTree(Collection $elements, $parentId = 0)
    {
        $branch = [];

        foreach ($elements as $element) {
            if ($element['parent_id'] == $parentId) {
                if (count($element->childs)) {
                    $children = self::buildTree($elements, $element['id']);
                    $element['children'] = $children;

                    foreach ($element->childs as $child) {
                        echo 'teste1';
                        $child->text;
                    }
                }
                $branch[] = $element;
            }
        }

        return $branch;
    }

    public function addTopic(Request $request)
    {
        try {
            $marker = Marker::create([
                'label' => $request->text,
                'video_id' => $request->parent,
                'time' => $request->position,
                'playlist_id' => $request->playlistid,
            ]);

            $marker->Save();

            // $topic = Topic::create([
            //     'topic_name' => $request->text,
            //     'playlist_id' => $request->playlistid,
            //     'position' => $request->position
            // ]);

            // if ($request->parent && $request->parent !== 'none') {
            //     //  Here we define the parent for new created category
            //     $node = Topic::find($request->parent);

            //     $node->appendNode($topic);
            // }
        } catch (Throwable $th) {
            echo $th;
        }
    }

    /**
     * @param $idVideoBD
     * @return array
     */
    public function getVideoData($idVideoBD): array
    {
        $varResult = [];

        try {
            if (str_contains($idVideoBD, '-')) {
                $pieces = explode('-', $idVideoBD);
                $marker = Marker::where('id', '=', $pieces[1])->first();
                $time = $marker->time;

                $videoYoutube = Video::where('id', '=', $pieces[0])->first();
            } else {
                $videoYoutube = Video::where('id', '=', $idVideoBD)->first();
                $time = 0;
                $varResult = '';
            }

            $youtube = new YouTubeDownloader();
            $filePath =
                'storage/videos/' . $videoYoutube->youtube_id . '.mp4';

            $downloadOptions = $youtube->getDownloadLinks(
                'https://www.youtube.com/watch?v=' .
                    $videoYoutube->youtube_id
            );

            if ($downloadOptions->getAllFormats()) {

                $varFilter = array_filter(
                    $downloadOptions->getAllFormats(),
                    function ($v, $k) {
                        return $k == $k && $v->quality == 'hd720';
                    },
                    ARRAY_FILTER_USE_BOTH
                );

                $numeric_indexed_array = array_values($varFilter);
                $varResult = $downloadOptions->getFirstCombinedFormat()
                    ->url;
            } else {
                echo 'No links found';
            }

            // // Check if the file exists
            // if (!file_exists($filePath)) {


            //     $this->saveVideoFromUrl(
            //         $numeric_indexed_array[0]->url,
            //         $videoYoutube->youtube_id . '.mp4'
            //     );
            // }

            $varResult = [
                'url' => $numeric_indexed_array[0]->url,
                'description' => str_replace(
                    "\n",
                    '</br>',
                    $videoYoutube->description
                ),
                'title' => $videoYoutube->title,
                'time' => $time,
                'id' => $idVideoBD,
            ];
        } catch (YouTubeException $e) {
            //dd($e);
            echo 'Something went wrong: ' . $e->getMessage();
        }

        return $varResult;
    }

    public function VideoTitles($playlistId)
    {
        return Video::query()
            ->select('id', 'title')
            ->where('playlist_id', '=', $playlistId)
            ->get();
    }
}
