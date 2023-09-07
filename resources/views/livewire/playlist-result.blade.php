@php
    $count = 0;
@endphp

@php
    /** @var App\Models\Video $item */
@endphp


<div>
    <form wire:submit.prevent="submit">
        <div class="form-group">
            <label for="name">Nova Plalist</label>
            <input type="text" wire:model.lazy="playlistid" class="form-control" id="playlistid">
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>

    </form>
</div>



@foreach ($playlists1 as $item)
    <div class="row" wire:key='{{ $item->id }}'>
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="{{ $item->thumbnail }}" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{{ $item->title }}</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <button type="button" class="btn btn-primary" onclick="hideplaylist('{{ $item->id }}')"

                            >
                            Show Videos
                        </button>
                        <a class="btn btn-primary" role="button" wire:click="remove({{ $item->id }})">Deletar</a>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    </div>
@endforeach


<script>
    function hideplaylist(id) {
        // Run a callback when an event ("foo") is emitted from this component
        // with the id of the playlist to hide.
        //
        // The callback will be passed the id of the playlist that was hidden.
        //
        // The callback will be passed the new playlist object. 

        Livewire.emit('showVideos', id);

        $("#videoslist").children().eq(0).empty();
        $('#videoslist').show();
        $('#playlist').hide();
        $('#videjsplayer').show();
        $('#accordion').height($("video").height());

    }
</script>
