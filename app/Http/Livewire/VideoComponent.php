<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Video;
use YouTube\YouTubeDownloader;
use YouTube\Exception\YouTubeException;

class VideoComponent extends Component
{
    public $playlist;
    public $videoUrl = null;
    public $selectedVideoId = null;

    public function mount($playlist)
    {
        $this->playlist = $playlist;
    }

    public function render()
    {
        $videos = Video::where('playlist_id', $this->playlist)->get();
        return view('livewire.video-component', compact('videos'));
    }
    

    public function loadVideo($videoId)
    {
        $video = Video::find($videoId);
        $this->videoUrl = $this->getDownloadLink($video->youtube_id);
        $this->selectedVideoId = $videoId;
        $this->emit('videoLoaded', $videoId); // Emitindo um evento
    }

    private function getDownloadLink($videoYoutube)
    {
        $youtube = new YouTubeDownloader();

        try {
            $downloadOptions = $youtube->getDownloadLinks(
                'https://www.youtube.com/watch?v=' . $videoYoutube
            );

            if ($downloadOptions->getAllFormats()) {
                $varFilter = array_filter(
                    $downloadOptions->getAllFormats(),
                    function ($v, $k) {
                        return $k == $k && $v->quality == 'hd720';
                    },
                    ARRAY_FILTER_USE_BOTH
                );

                $numericIndexedArray = array_values($varFilter);
                return $numericIndexedArray[0]->url;
            } else {
                return null;
            }
        } catch (YouTubeException $e) {
            return null;
        }
    }
}
