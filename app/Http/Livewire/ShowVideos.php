<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Video;

use App\Models\Category;
use App\Models\Marker;
use App\Models\Playlist;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use YouTube\YouTubeDownloader;
use YouTube\Exception\YouTubeException;
use Illuminate\Support\Facades\Log;

class ShowVideos extends Component
{
    // public function render()
    // {
    //     return view('livewire.show-videos');
    // }


    public $playlist = 5;
    public $youTubeVideo;
    public $currentId;
    public $text;
    public $playlistId;
    public $student_id, $name, $email, $phone, $student_edit_id, $student_delete_id;

    public $view_student_id, $view_student_name, $view_student_email, $view_student_phone;

    public $videos;

    // protected $listeners  = [
    //     'showVideos' => 'showVideos',
    //     'AddMarker' => 'previous',
    //     'refreshComponent' => '$refresh'
    // ];


    protected $listeners = ['showVideosForPlaylist' => 'loadVideosForPlaylist'];


    public function submit()
    {
        dd($this->name);
    }
    public function fireAddMarker($id, $text, $time)
    {

        $params = [
            'id' => $id,
            'text' => $text,
            'time' => $time,
        ];


        $this->emit('postMarker', $params);



        //$this->emit('AddMarker', $this->currentId);
    }

    public function previous()
    {
        // get the current user
        $video = Video::find($this->currentId);
        // get next user id
        $previous = Video::where('id', '<', $video->id)->max('id');
        $this->getYoutubeLink($previous);
    }




    public function showVideos($id)
    {
        try {
            //dd($id);
            $this->playlist = $id;
            //$this->videos = Video::wherePlaylistId($id)->get();

            //dd($this->playlist );
            //$this->emit('refreshComponent');
        } catch (\Throwable $th) {
            dd($th);
        }
        //$this->render();
    }

    public function AddMarker($id, $text, $time)
    {
        $mk = Marker::create([
            'video_id' => $id,
            'label' => $text,
            'time' => $time,
        ]);

        $mk->save();

        $this->emitTo('ShowVideos', 'refreshComponent');
    }

    public function loadVideosForPlaylist($playlistId)
    {
        $this->videos = Video::where('playlist_id', $playlistId)->get();
        $this->render(); // Força uma renderização do componente
    }
    public function render()
    {

        $videos = Video::wherePlaylistId('51')->get();
        // dd($videos);
        return view('livewire.show-videos', ['videos' => $this->videos]);
    }
}
