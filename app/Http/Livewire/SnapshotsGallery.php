<?php

namespace App\Http\Livewire;
use App\Models\snapshot;
use App\Models\Snapshot as ModelsSnapshot;
use App\Models\video;

use Livewire\Component;
use Illuminate\Support\Facades\DB;

class SnapshotsGallery extends Component
{
    public function render()
    {



        // $name = DB::table('snapshots')->where('video_Id', 295)->pluck('video_Id');
        $video = Video::where('youtube_id', '=', 1)->first();
        $snapshotVar = snapshot::where('video_Id', 295)->get();


        // foreach ($snapshotVar as $key) {
        //     echo  $key->nome;
        // }

        return view('livewire.snapshots-gallery', [
            'snapshots' => snapshot::all(),
        ]);

        // return view('livewire.snapshots-gallery');
    }
}
