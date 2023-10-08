<?php

namespace App\Http\Livewire;

use App\Http\Controllers\PlaylistController;
use App\Models\Playlist;
use App\Models\Video;
use Livewire\Component;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Log;


class PlaylistResult extends Component
{

    protected $listeners  = [
        'refreshComponent' => '$refresh'
    ];

    public $category;
    public $playlistid = '';


    // public function mount($initialplaylists)
    // {
    //     $this->playlists1 = $initialplaylists;
    //     // $this->fill(['playlists' => $this->playlists]);
    // }

    public function callVideos($playlistid)
    {
        //dd($this->playlistid);
        //array_push($this->videos , Video::wherePlaylistId($playlistid)->get()->toArray());
        $this->emit('showVideos', $playlistid);
        //$this->emit('refreshComponent');
    }

    public function remove($playlistid)
    {
        $playlist = Playlist::find($playlistid);
        $this->category = $playlist->category_id;
        $playlist->delete();
    }

    public function AddItens($playlistid, $category)
    {
        //dd($playlistid);
        $pc = new PlaylistController();
        $pc->addPlaylist($playlistid, $category);
    }
    // PlaylistResult.php
    public function emitShowVideos($playlistId)
    {
        $this->emit('showVideosForPlaylist', $playlistId);
    }

    public function render()
    {
        try {
            $playlists = Playlist::whereCategoryId($this->category)->get();
            return view('livewire.playlist-result', ['playlists1' => $playlists]);
        } catch (\Throwable $th) {
            Log::error($th);
        }
    }




    public function submit()
    {
        $pc = new PlaylistController();
        $pc->AddPlaylist($this->playlistid, $this->category);
        $this->emit('refreshComponent');
        $playlists = Playlist::whereCategoryId($this->category)->get();

        session()->flash('message', 'Obrigado pelo seu contato!');
        //$this->refresh();

    }
}
