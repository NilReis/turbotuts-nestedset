<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Category;
use App\Models\Playlist;

class PlaylistComponent extends Component
{
    public $category;

    public function mount($category)
    {
        $this->category = $category;
    }

    public function render()
    {
        $playlists = Playlist::where('category_id', $this->category)->get();
        return view('livewire.playlist-component', compact('playlists'));
    }
}
