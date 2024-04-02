<div>
    <h3>Marcadores/Capítulos</h3>
    <div class="row">
        @foreach($markers as $marker)
            <div class="col-md-4">
                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h5 class="card-title">{{ $marker->title }}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Tempo: {{ $marker->time }}</p>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
