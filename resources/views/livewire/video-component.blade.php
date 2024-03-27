
<div id="accordionVideos">
    @foreach($videos as $video)
    <div class="card">
        <div class="card-header" id="headingVideo{{ $video->id }}">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseVideo{{ $video->id }}" aria-expanded="true" aria-controls="collapseVideo{{ $video->id }}">
                {{ $video->title }}
            </button>
            <!-- Adicionando a miniatura do vídeo -->
            <img src="{{ $video->thumbnail_src }}" alt="{{ $video->title }} thumbnail" class="img-thumbnail">
        </div>
        <div id="collapseVideo{{ $video->id }}" class="collapse" aria-labelledby="headingVideo{{ $video->id }}" data-parent="#accordionVideos">
            <div class="card-body">
                <!-- Botão para carregar o vídeo -->
                <button onclick="loadVideo('{{ $video->youtube_id }}', 'videoContainer{{ $video->id }}')">Carregar Vídeo</button>

                <!-- Container onde o vídeo será carregado -->
                <div id="videoContainer{{ $video->id }}"></div>
            </div>
        </div>
    </div>
    @endforeach
</div>

<script>
    window.livewire.on('videoLoaded', videoId => {
        const videoElement = document.getElementById('headingVideo' + videoId);
        videoElement.scrollIntoView({
            behavior: 'smooth'
        });

        // videojs('my-video' + videoId, {
        //     // Outras opções do Video.js aqui...
        //     // Configuração do buffer
        //     preload: 'auto', // Você pode definir para 'auto', 'none' ou 'metadata'
        //     techOrder: ['html5'], // Define a ordem de preferência das tecnologias de reprodução


        //     // Configuração do buffer para 5 minutos (300 segundos)
        //     bufferLength: 300
        // }); // Inicializando o player Video.js com a configuração do buffer
    });

    function loadVideo(youtubeId, containerId) {
        // Gerando o código do iframe com o ID do vídeo do YouTube
        var iframeCode = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + youtubeId + '" allowfullscreen></iframe></div>';

        // Inserindo o iframe no container correspondente
        document.getElementById(containerId).innerHTML = iframeCode;
    }
</script>