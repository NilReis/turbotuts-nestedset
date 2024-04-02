<div class="flex-container video-container">
    @foreach($videos as $index => $video)
    <div class="card">
        <div class="card-header">
            <h9 class="mb-0">
                {{ $video->title }}
            </h9>
        </div>
        <div class="card-body video-content">
            <div class="video-actions">
                <button class="btn btn-primary" onclick="loadVideo('{{ $video->youtube_id }}', event)">Ver
                    Vídeo</button>
                <button class="btn btn-secondary" wire:click="loadMarkers({{ $video->id }})">Mostrar Marcadores</button>
                <button class="btn btn-success" wire:click="addToDownloadQueue({{ $video->id }})">Adicionar à Fila de
                    Download</button>

            </div>
            <!-- Acordeão com marcadores -->
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Marcadores
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            @foreach($video->markers->sortBy('time') as $marker)
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $marker->label }}</h5>
                                    @php
                                    $seconds = floor($marker->time % 60);
                                    $minutes = floor(($marker->time / 60) % 60);
                                    $hours = floor($marker->time / 3600);
                                    $formattedTime = sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);
                                    @endphp
                                    <p class="card-text" onclick="goToMarkerTime({{ $marker->time }})">Tempo: {{ $formattedTime }}</p>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
</div>


<script src="https://www.youtube.com/iframe_api"></script>
<script>
function goToMarkerTime(timeInSeconds) {
    if (player && player.seekTo) {
        player.seekTo(timeInSeconds);
    }
}

function addChapter() {
    var currentTime = player.getCurrentTime();
    var chapterDescription = document.getElementById('chapterDescription').value;
    Livewire.emit('addChapter', currentTime, chapterDescription);
}
</script>
<script>
// Inicializa o player do YouTube
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '800', // Aumenta a altura
        width: '1400', // Aumenta a largura
        videoId: '{{ $currentVideoId }}', // Use a propriedade currentVideoId do Livewire
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Função chamada quando o player está pronto
function onPlayerReady(event) {
    event.target.playVideo();
}

// Função chamada quando o estado do player muda
function onPlayerStateChange(event) {
    // Você pode adicionar lógica aqui se necessário
}

function loadVideo(youtubeId, event) {
    if (player) {
        player.loadVideoById(youtubeId);
        Livewire.emit('updateCurrentVideoId', youtubeId);
    }
    event.stopPropagation(); // Impede que o evento se propague para o acordeão
}
</script>

<script>
function addToDownloadQueue(youtubeId) {
    fetch('/add-to-download-queue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                url: youtubeId
            })
        })
        .then(response => response.text()) // Change this line
        .then(data => console.log(data)) // And this line
        .catch((error) => {
            console.error('Error:', error);
        });
}
</script>
