<?php

namespace App\Http\Controllers\api;

use App\Models\Marker;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use DateTime;

class MarkerJsonControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Marker::where('video_id', 1)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($request)
    {
        Marker::create($request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $marker = new Marker();
            $marker->time = $request->input('time');
            $marker->label = $request->input('label');
            $marker->video_id = $request->input('video_id');

            // Handle the image
            if ($request->has('image')) {
                $imageData = $request->input('image');
                $fileName = time() . '.png'; // Generate a file name
                $path = 'markers/' . $fileName; // Define a path to save the image
                // Extract the base64 data part
                list(, $imageData) = explode(',', $imageData);
                \Storage::put($path, base64_decode($imageData)); // Save the image
                $marker->url = $path; // Save the path as the URL in the marker
            }

            $marker->save();

            return response()->json([
                'message' => 'Marker saved successfully',
                'marker' => $marker,
            ]);
        } catch (\Throwable $th) {
            // Log::error($th->getMessage());

            return response()->json(
                [
                    'message' => 'Error saving marker',
                    'error' => $th->getMessage(),
                ],
                500
            );
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
        return Marker::where('video_id', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
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
        Marker::where('id', $id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Marker::where('id', $id)->delete();
    }

    public function getCurrentVideo($id)
    {
        return 'teste';
    }
}
