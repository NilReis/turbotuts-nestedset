<div class="overflow-auto" style="height:700px">
    @foreach ($snapshots as $snapshot)
        <div class="card" style="width:1200px">
            <img class="card-img-top" src="{{asset('storage/img/' .$snapshot->nome . ".png" ) }}" alt="Card image" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">{{ $snapshot->nome }}</h4>
                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                <a href="#" class="btn btn-primary">Deletar</a>
            </div>
        </div>
    @endforeach
</div>
