<?php

namespace App\Http\Controllers;

use App\Models\video;
use App\Models\marker;

use Illuminate\Http\Request;

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
}
