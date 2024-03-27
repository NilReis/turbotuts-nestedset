<div id="accordion">
    @foreach($playlists1 as $index => $playlist)
        <div class="card">
            <div class="card-header" id="heading{{ $index }}">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse{{ $index }}" aria-expanded="true" aria-controls="collapse{{ $index }}">
                        {{ $playlist->title }}
                    </button>
                </h5>
            </div>
            <div id="collapse{{ $index }}" class="collapse" aria-labelledby="heading{{ $index }}" data-parent="#accordion" data-playlist-id="{{ $playlist->id }}">
                <div class="card-body">
                    <!-- Adicionado botão para carregar vídeos -->
                    <button class="btn btn-primary load-videos-btn" data-playlist-id="{{ $playlist->id }}">Load Videos</button>
                    <!-- O conteúdo do vídeo será carregado aqui -->
                </div>
            </div>
        </div>
    @endforeach
</div>

<script>
    console.log(Livewire); // Deve logar o objeto Livewire se estiver disponível

document.addEventListener('DOMContentLoaded', function () {
    console.log('show.bs.collapse event fired'); // Adicione esta linha

    var accordion = document.getElementById('accordion');
    accordion.addEventListener('show.bs.collapse', function (e) {
        var playlistId = e.target.dataset.playlistId;
        Livewire.emit('showVideosForPlaylist', playlistId);
    });

    // Adicionado evento de clique para botões de carregar vídeos
    document.querySelectorAll('.load-videos-btn').forEach(function(button) {
        console.log('Button clicked'); // Adicione esta linha
        button.addEventListener('click', function(e) {
            var playlistId = e.target.dataset.playlistId;
            Livewire.emit('showVideosForPlaylist', playlistId);
        });
    });
});
</script>
