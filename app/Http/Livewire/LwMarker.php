<?php

namespace App\Http\Livewire;

use App\Models\Marker;
use Livewire\Component;

class LwMarker extends Component
{
    public $title;
    public $description;
    public $time;
    public $markers = [];
    public $video_id;

    public $eventoRecebido = '';

    protected $listeners = ['postMarker' => 'handleEventAddMarker'];

    public function handleEvent($data)
    {
        $this->eventoRecebido = $data;
    }


    public function render()
    {

        try {
            $mk = Marker::where('video_id', $this->video_id)->get();

            return view('livewire.lw-marker', [
                'markers' => $mk
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function handleEventAddMarker($param)
    {
        $mk = Marker::create([
            'video_id' => $param->id,
            'label' => $param->description,
            'time' => $param->time,
        ]);

        $mk->save();

        $this->title = $param->title;
        $this->description = $param->description;
        $this->time = $param->time;

        //$this->markers[] = ['title' => 'Novo marcador', 'description' => 'Descrição do novo marcador'];

    }

}
