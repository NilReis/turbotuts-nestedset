@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    {{-- <h1><i class="{{$menu->icon}}"></i> {{$menu->text}}</h1> --}}

    <style>
        @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');

        html {
            box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }

        html {
            background: linear-gradient(135deg, #26a3ff, #53c9b3) no-repeat fixed;
        }

        body {
            font-family: 'Lato', "Helvetica", Arial, sans-serif;
        }

        .post {
            background: #fff;
            /* text-align: center; */
            max-width: auto;
            margin: 0px auto;
            padding: 0px;
            border-radius: 2px;
            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);

            h1 {
                font-size: 24px;
                margin: 0 0 5px;
            }

            hr {
                width: 50px;
                margin: 15px auto;
                border: 1px solid #eee;
            }

            p {
                font-weight: bold;
                margin: 10px 0;
            }

            span {
                color: #aaa;
            }
        }
    </style>

    <style>
        body {
            font-family: Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif;
            font-weight: 400;
        }

        #one {
            background: white;
        }

        #two {
            padding-top: 20px;
            background: #f2f2f2;
        }

        .bg-grey {
            background: #f2f2f2;
            border-left: 1px solid #ccc;
            height: 100vh;
        }

        #two ul.timeline {
            overflow: scroll;
            height: 100vh;
            padding-top: 15px;
        }

        /* split js */
        .gutter {
            background-color: #555;
            background-repeat: no-repeat;
            background-position: 50%;
        }

        .gutter.gutter-horizontal {
            cursor: ew-resize;
            float: left;
            height: 100%;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
        }

        .split {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .split {
            overflow-y: auto;
            overflow-x: auto;
            height: 100vh;
        }

        /* Draggable items */
        .timeline-item {
            cursor: move;
        }

        .drop-zone {
            padding: 1em;
            margin: .5em;
            border: 2px dashed #ccc;
            border-radius: 4px;
        }

        /* collapsible overrides */
        .panel-title>.small,
        .panel-title>.small>a,
        .panel-title>a,
        .panel-title>small,
        .panel-title>small>a {
            display: block;
            font-size: 0.9em;
            padding: 10px 15px;
        }

        .panel-heading {
            /*padding:0;*/
        }

        .panel-title a:after {
            font-family: 'fontawesome';
            float: right;
        }

        .panel-title a[aria-expanded=true]:after {
            content: "\f106";
        }

        .panel-title a[aria-expanded=false]:after {
            content: "\f107";
        }

        /* nested panels */
        .box-body .panel-group .panel {
            border-radius: 0;
            margin: -1px .5em 0;
        }

        .panel-group {
            margin: 1em 0;
        }

        .panel-group .panel-group {
            margin: .5em 0;
        }

        .panel .list-unstyled li {
            margin: 0 0.5em;
            padding: 0.5em 0;
            border-bottom: 1px solid #ccc;
        }

        .panel .list-unstyled li:last-child {
            border: none;
        }

        .panel .list-unstyled li a {
            padding: .5em;
        }

        .panel .list-unstyled li:hover {
            cursor: move;
        }

        .box-header {
            cursor: pointer;
        }

        .list-unstyled .pull-right.fa {
            margin-left: 0.3em;
            padding: .9em 0.1em;
            cursor: pointer;
        }

        /* Comments */
        .comments :first-of-type.comment {
            border-top: 1px solid #eee;
            margin-top: 10px;
        }

        .comment {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }

        .box-comments .box-comment img,
        .img-sm,
        .user-block-sm.user-block img {
            width: 30px !important;
            height: 30px !important;
        }

        .comments .comment-text {
            margin-left: 40px;
            color: #555;
        }

        .comments .username {
            color: #444;
            display: block;
            font-weight: 600;
        }

        .comments .text-muted {
            font-weight: 400;
            font-size: 12px;
        }

        .comments :last-of-type.comment {
            border-bottom: 0;
        }

        .person-hidden {
            display: none;
        }
    </style>

    <style>
        .container {
            width: 100%;
            padding-right: 0;
            padding-left: 0;
            margin-right: 0;
            margin-left: 0;
        }
    </style>

    <style>
        .page-container {
            margin: 20px;
        }


        /* horizontal panel*/

        .panel-container {
            display: flex;
            flex-direction: row;
            border: 1px solid silver;
            overflow: hidden;

            /* avoid browser level touch actions */
            xtouch-action: none;
        }

        .panel-left {
            flex: 0 0 auto;
            /* only manually resize */
            padding: 10px;
            width: 300px;
            min-height: 200px;
            min-width: 150px;
            white-space: nowrap;
            background: #838383;
            color: white;
        }

        .splitter {
            flex: 0 0 auto;
            width: 18px;
            background: url(https://raw.githubusercontent.com/RickStrahl/jquery-resizable/master/assets/vsizegrip.png) center center no-repeat #535353;
            min-height: 200px;
            cursor: col-resize;
        }

        .panel-right {
            flex: 1 1 auto;
            /* resizable */
            padding: 10px;
            width: 100%;
            min-height: 200px;
            min-width: 200px;
            background: #eee;
        }


        /* vertical panel */

        .panel-container-vertical {
            display: flex;
            flex-direction: column;
            height: 500px;
            border: 1px solid silver;
            overflow: hidden;
        }

        .panel-top {
            flex: 0 0 auto;
            /* only manually resize */
            padding: 10px;
            height: 150px;
            width: 100%;
            white-space: nowrap;
            background: #838383;
            color: white;
        }

        .splitter-horizontal {
            flex: 0 0 auto;
            height: 18px;
            background: url(https://raw.githubusercontent.com/RickStrahl/jquery-resizable/master/assets/hsizegrip.png) center center no-repeat #535353;
            cursor: row-resize;
        }

        .panel-bottom {
            flex: 1 1 auto;
            /* resizable */
            padding: 10px;
            min-height: 200px;
            background: #eee;
        }

        label {
            font-size: 1.2em;
            display: block;
            font-weight: bold;
            margin: 30px 0 10px;
        }

        pre {
            margin: 20px;
            padding: 10px;
            background: #eee;
            border: 1px solid silver;
            border-radius: 4px;
            overflow: auto;
        }
    </style>

    <link href="//vjs.zencdn.net/7.10.2/video-js.min.css" rel="stylesheet">

    <link href="https://cdn.syncfusion.com/17.4.0.46/js/web/flat-azure/ej.web.all.min.css" rel="stylesheet" />



@stop

@section('content')
    <script src="https://rawgit.com/blueimp/JavaScript-Canvas-to-Blob/master/js/canvas-to-blob.js"></script>


    @livewire('show-videos', ['playlist' => request()->id])


@stop

@section('css')

@stop

@section('js')

    <script src="https://vjs.zencdn.net/7.10.2/video.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.6.1/Youtube.min.js"></script>

    {{-- <script src="//cdn.syncfusion.com/js/assets/external/jquery-1.11.3.min.js" type="text/javascript"> </script> --}}
    <script src="https://cdn.syncfusion.com/js/assets/external/jquery.easing.1.3.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://cdn.syncfusion.com/17.4.0.46/js/web/ej.web.all.min.js"></script>
    <script type="text/javascript" src="https://cdn.syncfusion.com/17.4.0.46/js/web/properties.js"></script>
    <script src="//cdn.syncfusion.com/js/assets/external/jsrender.min.js"></script>




    <script src="https://raw.githubusercontent.com/X3TechnologyGroup/VideoFrame/master/VideoFrame.min.js"></script>

    <script src="/js/service-basic.js"></script>


    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.8/themes/default/style.min.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.8/jstree.min.js"></script>




    <script>
        var tabIndex = 1,
            treeviewObj, selectedNode;
        $(window).on('load', function() {
            console.log('Document is loaded');


        });



        $.views.settings.delimiters("[%", "%]");

        console.log('DOM is ready');

        function OpenVideo(id) {
            $.get('/api/topicjson/getYoutubeLink/' + id, function(d) {
                console.log(d);
                player.src({
                    type: 'video/mp4',
                    src: d.youtubeid
                })
                player.currentTime(d.time)
                player.play()
                $('#accordion-container').hide();
                player.show();

                $("#descriptionText").html(d.description);

            });
        }



        function onClose(args) {
            args.events.preventDefault();
        }




        var player = videojs('preview-player');
        var button = videojs.getComponent('Button');
        var closeButton = videojs.extend(button, {
            constructor: function() {
                button.apply(this, arguments);
                this.controlText("Exit Course");
                this.addClass('vjs-icon-cancel');
            },
            handleClick: function() {
                this.player().hide();
                $('#accordion-container').show();
            }
        });
        videojs.registerComponent('closeButton', closeButton);
        player.getChild('controlBar').addChild('closeButton', {});
        player.hide();

        function refresh_json() {
            var v = $("#treecontainer").jstree(true).get_json('#', {}, false);
            var jsonstring = JSON.stringify(v, null, '\t');
            //$("#jsonstring").html("<h1>JSON string</h1><code>" + jsonstring + "</code>");
        }
    </script>



    <script src="\js\videojs_syncfusion.js"></script>

    <script>
        $(function() {
            // This is where we define the accordion container's maximum height, and scrolling if the content overflows.
            var containerOffset = $('#accordion-container').offset(); // gets the container's origin coordinates
            var containerHeight = ($(window).height() - containerOffset.top) -
                16; //determines container's maximum height
            $('#accordion-container')
                .css({ // sets container's maximum height & enables vertical scrolling for content overflow
                    'max-height': containerHeight,
                    'overflow-y': 'auto'
                });

            //player.height(containerHeight -100);
            //player.width($('#accordion-container').offset());
        });

        function setWindowWH() {
            // get window width and height
            var windowWidth = $(window).width(),
                windowHeight = $(window).height();

            // add to DOM
            player.height(windowHeight - 120 + "px");
            //player.width(100 "%");
            $('#preview-player').width('100%')
            //player.width($('#accordion-container').height());

            //$("#cont1").height(windowWidth + "px");
            //$("#myTabContent").height(windowHeight - 150);
        }

        // run function on window load and resize
        $(window).on("load resize", function() {
            setWindowWH();
        });
    </script>


    {{-- accordeon --}}
    <script>
        $(function() {
            // This is where we define the accordion container's maximum height, and scrolling if the content overflows.
            var containerOffset = $('#accordion-container').offset(); // gets the container's origin coordinates
            var containerHeight = ($(window).height() - containerOffset.top - 100) -
                16; //determines container's maximum height
            $('#accordion-container')
                .css({ // sets container's maximum height & enables vertical scrolling for content overflow
                    'max-height': containerHeight,
                    'overflow-y': 'auto'
                });
        });
    </script>


    {{-- accordeon --}}

@stop
