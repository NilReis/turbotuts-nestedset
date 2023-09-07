<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Log;



class VideojsPlayer extends Component
{

    public $title;

    protected $listeners  = [
        'setTitle' => 'setTitle',
        'refreshComponent' => '$refresh'
    ];


    public function setTitle($title)
    {
        $this->title = $title;
    }



    public function render()
    {
        try {
            return view('livewire.videojs-player', ['title' => $this->title]);

        } catch (\Throwable $th) {
            Log::error($th);
        }
    }
}
