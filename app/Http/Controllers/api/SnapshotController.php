<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Snapshot;
use App\Models\Video;
use Illuminate\Http\Request;
// import the storage facade
use Illuminate\Support\Facades\Storage;

class SnapshotController extends Controller
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
        // dd( $request);
        try {
            $img = $request->dataUrl;

            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);

            $path = Storage::disk('public')->path('img\picture.png');

            Storage::disk('public')->put('img\\' . $request->nome . '.png', $data);



            $video = Video::where('youtube_id', '=', $request->videoId)->first();



            $vSnapShot = new Snapshot();
            $vSnapShot->nome = $request->nome;
            $vSnapShot->videoId = $request->videoId;
            $vSnapShot->shotTime = $request->shotTime;
            $vSnapShot->video_Id = $video->id ;
            $vSnapShot->save();

            $teste = Snapshot::where('video_Id', '=', 295);


        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
