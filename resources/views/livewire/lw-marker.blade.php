<div>
    @forelse ($markers as $marker)
        <div>
            <h2>{{ $marker->label }}</h2>

        </div>


    @empty
        <p>No replies</p>
    @endforelse
</div>
