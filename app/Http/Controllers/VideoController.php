<?php

namespace App\Http\Controllers;

use App\Models\video;
use App\Models\marker;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use YouTube\YouTubeDownloader;
use YouTube\Exception\YouTubeException;
use Illuminate\Support\Facades\Storage; // Adicione esta linha




class VideoController extends Controller
{
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $topicSplit = explode(PHP_EOL, $request->topics);
        foreach ($topicSplit as $tp ) {
            $skuList = explode(";", $tp);
            //dd($request->playlist);
            $video = Video::whereid($skuList[1])->get();
            //dd($topic);
            $video[0]->title = $skuList[0];
            $video[0]->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function edit(video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(video $video)
    {
        //
    }

    public function AddChapter(Request $request)
    {
        $marker = new Marker();
        $marker->Label = $request["name"];
        $marker->Time = floatval($request["time"]);

        $video = Video::where('YoutubeID', '=', $request['youtubeID'])->first();
        $marker->youtube_video_id = $video->id;
        $marker->save();


       dd($request);

    }
    public function addToDownloadQueue(Request $request)
    {
        $url = $request->input('url');
        Artisan::call("download:video {$url}");
    
        return response()->json(['message' => 'Video added to download queue']);
    }

    public function downloadVideo($videoId)
    {
        $youtube = new YouTubeDownloader();

        try {
            $downloadOptions = $youtube->getDownloadLinks("https://www.youtube.com/watch?v={$videoId}");

            if ($downloadOptions && $downloadOptions->getAllFormats()) {
                $downloadLink = $downloadOptions->getFirstCombinedFormat()->url;
                echo $downloadLink;

                // Tenta obter o conteúdo do vídeo
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $downloadLink);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
                $videoContent = curl_exec($ch);
                $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                curl_close($ch);

                if ($videoContent === false || $httpcode != 200) {
                    throw new \Exception("Falha ao baixar o vídeo: {$videoId}");
                }

                $savePath = "videos/{$videoId}.mp4";
                if (!Storage::disk('public')->put($savePath, $videoContent)) {
                    throw new \Exception("Falha ao salvar o vídeo: {$videoId}");
                }
            } else {
                Log::error("Não foi possível encontrar o link de download para o vídeo ID {$videoId}");
            }

        } catch (YouTubeException $e) {
            Log::error("Erro ao baixar o vídeo: " . $e->getMessage());
            throw $e;
        } catch (\Exception $e) {
            Log::error("Erro ao baixar o vídeo: " . $e->getMessage());
            throw $e;
        }
    }

}
