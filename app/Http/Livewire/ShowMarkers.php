<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Marker;

class ShowMarkers extends Component
{
    public $videoId;
    public $markers = [];

    public function mount($videoId)
    {
        $this->videoId = $videoId;
        $this->loadMarkers();
    }

    public function loadMarkers()
    {
        $this->markers = Marker::where('video_id', $this->videoId)->orderBy('time', 'asc')->get();
        dd($this->markers);
    }

    public function render()
    {
        return view('livewire.show-markers');
    }
}
