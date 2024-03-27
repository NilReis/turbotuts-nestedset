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
                <button class="btn btn-primary" onclick="loadVideo('{{ $video->youtube_id }}', event)">Ver Vídeo</button>
                <button class="btn btn-secondary" wire:click="loadMarkers({{ $video->id }})">Mostrar Marcadores</button>
                <button class="btn btn-success" wire:click="addToDownloadQueue({{ $video->id }})">Adicionar à Fila de Download</button>

            </div>
            <!-- Sub-card com marcadores -->
            <div class="markers-subcard">
                <h4>Marcadores</h4>
                <ul>
                    @foreach($video->markers as $marker)
                    <li>{{ $marker->label }} - {{ $marker->time }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
    @endforeach
</div>


<script src="https://www.youtube.com/iframe_api"></script>
<script>
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
    body: JSON.stringify({ url: youtubeId })
})
.then(response => response.text()) // Change this line
.then(data => console.log(data)) // And this line
.catch((error) => {
    console.error('Error:', error);
});
}
</script>