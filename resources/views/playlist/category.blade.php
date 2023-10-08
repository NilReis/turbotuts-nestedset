@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    {{-- <h1><i class="{{$menu->icon}}"></i> {{$menu->text}}</h1> --}}

    @livewireStyles()

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/video.js@7.20.3/dist/video-js.min.css" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/videojs-resolution-switcher-vjs7@1.0.0/videojs-resolution-switcher.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/videojs-watermark@2.0.0/dist/videojs-watermark.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/videojs-share@2.0.1/dist/videojs-share.css" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/videojs-social-share-overlay@0.0.7/dist/videojs-social-share-overlay.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/videojs-mobile-ui/dist/videojs-mobile-ui.css" />
    <link rel="stylesheet" href="https://dl.dropboxusercontent.com/s/mtc6rzkibqpgsey/monFichier19.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
    <link rel="stylesheet"
        href="https://unpkg.com/silvermine-videojs-quality-selector@1.1.2/dist/css/quality-selector.css" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/videojs-overlay@3.0.0/dist/videojs-overlay.css">

    <link rel="stylesheet" href="/css/customVideojs.css" />

    <style>
        .modal-dialog {
            max-width: 800px;
            margin: 30px auto;
        }
    </style>

@stop



@section('content')

    <div class="row">
        <div id="playlist" style="height: 533px;overflow-y: scroll;" class="col-sm-8">
            @livewire('playlist-result', ['category' => request()->id])
        </div>
        <div id="videjsplayer" class="col-sm-8" style="display: none">
            @include('partials.videojspart')
            @livewire('videojs-player')
        </div>

        <div id="videoslist" style="overflow-y: scroll;display: none;" class="col-sm-4">
            @livewire('show-videos')
        </div>

    </div>

    <!-- {{-- @livewire('playlist-result', ['initialplaylists ' => $playlists]) --}} -->

@stop

@section('css')
    {{-- <link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')

    <script
        src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js">
    </script>
    <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-resolution-switcher-vjs7@1.0.0/videojs-resolution-switcher.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-watermark@2.0.0/dist/videojs-watermark.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-share@2.0.1/dist/videojs-share.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-contextmenu-ui@5.1.0/dist/videojs-contextmenu-ui.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-mobile-ui/dist/videojs-mobile-ui.min.js"></script>
    <script src="https://unpkg.com/videojs-overlay-buttons@1.3.0/dist/videojs-overlay-buttons.js"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/videojs-contrib-quality-levels@2.1.0/dist/videojs-contrib-quality-levels.min.js">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-hls-quality-selector@1.1.4/dist/videojs-hls-quality-selector.min.js">
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

    <script src="https://rawgit.com/atlance01/vrapp-ionic/master/www/js/lib/videojs-playlist.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/videojs-overlay@3.0.0/dist/videojs-overlay.js"></script>

    @livewireScripts()




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
    </script>
    <script src="\js\videojs_syncfusion.js"></script>

@stop
