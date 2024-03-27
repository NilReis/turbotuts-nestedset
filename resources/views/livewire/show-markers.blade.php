<div>
    <h3>Marcadores/Capítulos</h3>
    <ul>
        @foreach($markers as $marker)
            <li>{{ $marker->title }} - {{ $marker->time }}</li>
        @endforeach
    </ul>
</div>