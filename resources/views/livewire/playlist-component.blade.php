<div id="accordionPlaylists">
    @foreach($playlists as $playlist)
    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="{{ $playlist->thumbnail }}" alt="{{ $playlist->title }} thumbnail" class="img-fluid">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ $playlist->title }}</h5>
                    <!-- Aqui você pode adicionar mais informações sobre a playlist se desejar -->
                    <button class="btn btn-primary" onclick="window.location.href='/playlist/{{ $playlist->id }}'">Ver vídeos</button>
                </div>
            </div>
        </div>
    </div>
    @endforeach

</div>