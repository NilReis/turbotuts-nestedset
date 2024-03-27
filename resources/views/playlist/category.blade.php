@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
{{-- <h1><i class="{{$menu->icon}}"></i> {{$menu->text}}</h1> --}}

@livewireStyles()

<link rel="stylesheet" href="https://dl.dropboxusercontent.com/s/mtc6rzkibqpgsey/monFichier19.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/videojs-overlay@3.0.0/dist/videojs-overlay.css">

<link rel="stylesheet" href="/css/customVideojs.css" />
<link href="https://v8-5-2--videojs-preview.netlify.app/dist/video-js.css" rel="stylesheet" />


<style>
    .modal-dialog {
        max-width: 800px;
        margin: 30px auto;
    }
</style>

@stop



@section('content')
<style>
    .row {
        display: flex;
        flex-direction: column;
        height: 100vh;
        /* or another value that suits your design */
    }

    #playlist {
        flex-grow: 1;
        overflow-y: scroll;
    }
</style>
<!-- Botão para abrir o modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addPlaylistModal">
    Adicionar Playlist
</button>

<!-- Modal -->
<div class="modal fade" id="addPlaylistModal" tabindex="-1" aria-labelledby="addPlaylistModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addPlaylistModalLabel">Nova Playlist</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="addPlaylistForm" action="{{ url('/api/playlist-youtube') }}" method="POST">
                @csrf <!-- Token CSRF para segurança -->
                <div class="modal-body">
                    <input type="text" id="playlistId" name="playlist_id" value="PLx3jFshHO0DkhyH-Aqu8erkJeyHEazrck">
                    <input type="text" id="categoryId" name="category_id" value="2">
                    <!-- Adicione mais campos conforme necessário -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Adicionar Playlist</button>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="row">

    <div id="playlist">

        @livewire('playlist-component', ['category' => request()->id])
    </div>
</div>
@stop


@section('css')
{{-- <link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')
@livewireScripts()


<script src="https://v8-5-2--videojs-preview.netlify.app/dist/video.js"></script>

<script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js">
</script>
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-resolution-switcher-vjs7@1.0.0/videojs-resolution-switcher.js">
    </script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-watermark@2.0.0/dist/videojs-watermark.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-share@2.0.1/dist/videojs-share.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-mobile-ui/dist/videojs-mobile-ui.min.js"></script> -->
<!-- <script src="https://unpkg.com/videojs-overlay-buttons@1.3.0/dist/videojs-overlay-buttons.js"></script> -->
<!-- <script
        src="https://cdn.jsdelivr.net/npm/videojs-contrib-quality-levels@2.1.0/dist/videojs-contrib-quality-levels.min.js">
    </script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-hls-quality-selector@1.1.4/dist/videojs-hls-quality-selector.min.js"> -->
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- <script src="https://rawgit.com/atlance01/vrapp-ionic/master/www/js/lib/videojs-playlist.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-overlay@3.0.0/dist/videojs-overlay.js"></script> -->
<!-- <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/videojs-contextmenu-ui@5.1.0/dist/videojs-contextmenu-ui.js"></script> -->





<!-- 
    <script>
        $('#myModal').on('shown.bs.modal', function() {
            console.log('O modal foi exibido!');
        });


        $(window).resize(function() {
            $('#playlist').height($(".content-wrapper").height() - 50);
            $('#accordion').height($("video").height());
        });
    </script>






    <script id="rendered-js">
        var player = videojs("emiliosalas_player1");


        player.touchOverlay({
            lockButton: {},
            previous: {
                handleClick: () => {
                    previous();

                }
            },
            seekLeft: {},
            play: {},
            seekRight: {},
            next: {
                handleClick: () => {
                    next();

                }
            }
        });

        player.on('ratechange', function() {
            var rate = player.playbackRate();
            player.defaultPlaybackRate(rate);
        });

        // Create the button
        var button = document.createElement('button');
        button.innerHTML = 'Show Overlay';

        // Add the button to the player controls
        player.controlBar.el().appendChild(button);

        // Handle clicks on the button
    </script> -->
<!-- <script src="\js\videojs_syncfusion.js"></script> -->

@stop