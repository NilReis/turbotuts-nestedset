@if($videos)
    @foreach($videos as $video)
        <div>
            <h3>{{ $video->title }}</h3>
            <!-- Adicione aqui outros detalhes do vídeo que você deseja renderizar -->
        </div>
    @endforeach
@else
    <p>No videos found for this playlist.</p>
@endif