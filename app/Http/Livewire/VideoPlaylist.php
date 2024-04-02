<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Video;
use App\Models\Marker;
use App\Jobs\DownloadVideoJob;


class VideoPlaylist extends Component
{
    public $playlistId;
    public $videos;
    public $currentVideoUrl;
    public $chapterDescription;
    public $chapterTime;
    public $currentVideoId;
    public $markers = [];


    protected $listeners = [
        'addChapter' => 'addChapter',
        'updateCurrentVideoId' => 'updateCurrentVideoId',
        'addChapter' => 'addChapter',
    ];

    public function addToDownloadQueue($videoId)
    {
        $video = Video::find($videoId);
        if ($video) {
            $video->is_queued_for_download = true;
            $video->save();
    
            // Opcional: Emitir um evento para notificar o usuário
            $this->emit('videoAddedToQueue', $video->title);
        }
    }
    
    public function loadMarkers($videoId)
    {
        $this->markers = Marker::where('video_id', $videoId)->orderBy('time', 'asc')->get();
    }

    public function updateCurrentVideoId($youtubeId)
    {
        $this->currentVideoId = $youtubeId;
    }

    public function showAlert($message)
    {
        $this->dispatchBrowserEvent('show-alert', ['message' => $message]);
    }

    public function playVideo($videoId)
    {
        $this->currentVideoId = $videoId;
        $this->dispatchBrowserEvent('videoChanged', ['videoId' => $videoId]); // Garantir que esteja presente
    }


    public function mount($playlistId)
    {
        $this->playlistId = $playlistId;
        $this->videos = Video::where('playlist_id', $this->playlistId)->get();


        if (count($this->videos) > 0) {
            $this->currentVideoUrl = $this->videos[0]->url; // Inicializa com o URL do primeiro vídeo
            $parsedUrl = parse_url($this->currentVideoUrl);
            if (isset($parsedUrl['query'])) {
                parse_str($parsedUrl['query'], $queryParams);
                $this->currentVideoId = $queryParams['v'] ?? null; // Extrai o ID do vídeo do URL
            } else {
                // Trate o caso em que o URL não contém uma string de consulta
                $this->currentVideoId = null;
            }
        }
    }
    public function addChapter($currentTime, $chapterDescription)
    {
        // Validação dos dados recebidos
        // $validatedData = $this->validate([
        //     'chapterDescription' => 'required|string',
        //     'chapterTime' => 'required|numeric',
        // ]);

        // Supondo que você tenha um modelo Marker para armazenar os capítulos
        $marker = new Marker;
        $marker->label = $chapterDescription; // Use 'label' em vez de 'description'
        $marker->time = $currentTime; // Use o valor de $currentTime que é enviado do frontend

        // Encontre o ID do vídeo na tabela de vídeos usando o ID do YouTube
        $video = Video::where('youtube_id', $this->currentVideoId)->first();
        if ($video) {
            $marker->video_id = $video->id; // Use o ID do vídeo encontrado
        } else {
            // Trate o caso em que o vídeo não foi encontrado
            // Por exemplo, você pode lançar uma exceção ou retornar um erro
            throw new \Exception("Vídeo não encontrado para o ID do YouTube: $this->currentVideoId");
        }

        $marker->save();

        // Limpa os campos após a adição do capítulo
        $this->chapterDescription = '';
        $this->chapterTime = '';

        // Opcional: Exibe uma mensagem de sucesso
        $this->dispatchBrowserEvent('show-alert', ['message' => 'Capítulo adicionado com sucesso!']);
    }
    public function getCurrentVideoTime()
    {
        // Supondo que você tenha uma maneira de acessar o player do YouTube
        return $this->player->getCurrentTime();
    }
    public function render()
    {
        return view('livewire.video-playlist');
    }
}
