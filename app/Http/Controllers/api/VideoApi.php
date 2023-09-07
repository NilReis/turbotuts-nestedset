<?php

namespace App\Http\Controllers\api;

use App\Models\Video;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class VideoApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($playlistId = null)
    {
        // Se o $playlistId estiver definido, filtre os vídeos da playlist correspondente
        if ($playlistId !== null) {
            return Video::where('playlist_id', $playlistId)->with('chapters')->get();
        }

        // Caso contrário, retorne todos os vídeos sem filtro
        return Video::with('chapters')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Video::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(Video $video)
    {
       $teste = Video::where('id', $video->id)->with('chapters')->get();
       dd($teste);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Video $video)
    {
        Video::where('id', $video->id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        Video::where('id', $video->id)->delete();
    }
}
