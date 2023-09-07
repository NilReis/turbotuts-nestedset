$('#result').on('click', 'li', function () {
    console.log("clicked " + this.id); // id of clicked li
    globalID = this.id;
    console.log("Gobal " + globalID);
});

var current_id;

$('#resultPlaylist').on('click', 'li', function () {
    console.log("clicked " + this.id); // id of clicked li
    globalID = this.id;
    console.log("Gobal " + globalID);
});

$('#resultVideoLink').on('click', 'li', function () {
    console.log("clicked " + this.id); // id of clicked li
    globalID = this.id;
    console.log("Gobal " + globalID);
});

$(document).on("pageshow", "#player", function () {
    getDetail(globalID);
});

function Next() {
    current_id++;
    getDetail(current_id);
}

function getDetail(id) {
    console.log("detail " + videoPlaylist[id]);
    //page loading
    $.mobile.loading("show", {
        text: "Loading...",
        textVisible: true,
        theme: "b",
        html: ""
    });
    current_id = id;
    $.getJSON('http://xlearning.ddns.net/youtubeapi/api/videoUrl?text=' + videoPlaylist[id].video_id, function (data) {
        //$('#poster').empty();

        $('#videoTitlePage').text(videoPlaylist[id].title)
        var items = [];
        $.each(data, function (key, val) {
            items.push("<li>" + val + "</li>")

        });
        var video = $('#video')[0];
        video.src = data.url;
        video.load();
        video.play();
        $.mobile.loading("hide");
        // $("#video").html('<source src=' + data.url + '</source>' );
        // $("#video").html(items.join(""));

    }).error(function () {
        console.log("The service is unavailable.");
        $.mobile.loading("hide");
        $.mobile.changePage("#error", "fade");
    });
}

function openVideo(id) {

    current_id = id;
    // $.getJSON('http://localhost:8081/api/videoUrl?text=' + id, function (data) {
    $.getJSON('./youtubeapi.php?text=' + id, function (data) {

        console.log(data);

        var video = $('#video')[0];
        video.src = data.url;
        video.load();
        //video.play();

        $('#Description').html(data.description);
        $('#title').html(data.title);


    }).error(function () {
        console.log("The service is unavailable.");

    });

}

//var video = document.querySelector('video');
//var canvas = document.querySelector('canvas');
//var context = canvas.getContext('2d');
//var w, h, ratio;
////add loadedmetadata which will     helps to identify video attributes......
//video.addEventListener('loadedmetadata', function () {
//    ratio = video.videoWidth / video.videoHeight;
//    w = video.videoWidth - 100;
//    h = parseInt(w / ratio, 10);
//    canvas.width = w;
//    canvas.height = h;
//}, false);
/////define a function
//function snap() {
//    context.fillRect(0, 0, w, h);
//    context.drawImage(video, 0, 0, w, h);
//}


const videoId = 'video';
const rateId = 'ratePosition';
const scaleFactor = 0.25;
let snapshots = [];
let startPosition = 0;
let canStore = false;
let intSeek = 0;

function setStartPosition() {
    canStore = true;
    intSeek = 0;
}

function MoveTouch(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    //      document.getElementById("demo").innerHTML = x + ", " + y;

    var elementById = parseFloat(document.getElementById(rateId).value);
    if (canStore) {

        startPosition = event.touches[0].clientX
        console.log("Start -" + startPosition);
        canStore = false;

    } else {

        //console.log("Result -");

        var currentMove = startPosition - event.touches[0].clientX;

        if (intSeek == 0) {
            intSeek = Math.abs(currentMove);
            console.log("grava inicio")
        }


        console.log("intSeek");
        console.log(intSeek);

        console.log("Math.abs(currentMove) + 50");
        console.log(Math.abs(currentMove) + 50);

        if ((Math.abs(currentMove) > intSeek)) {

            if (Math.sign(currentMove) > 0) {

                video.currentTime -= elementById;
                console.log("voltando");


            } else {

                video.currentTime += elementById;
                console.log("avancado");
            }
            intSeek = intSeek + 50;
        }

        //console.log(currentMove);
        //$('display').innerHTML = currentMove;


    }


}

function capture(video, scaleFactor) {

    if (scaleFactor == null) {
        scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    return canvas;
}

/**
 * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
 */
function shoot() {

    var video = document.getElementById(videoId);
    var output = document.getElementById('output');
    var canvas = capture(video, scaleFactor);
    canvas.onclick = function () {
        window.open(this.toDataURL(image / jpg));
    };
    snapshots.unshift(canvas);
    output.innerHTML = '';
    for (var i = 0; i < 20; i++) {
        output.appendChild(snapshots[i]);
    }
}

(function () {
    var captureit = document.getElementById('cit');
    //        captureit.click();
})();


document.getElementById("video").addEventListener("wheel", scrollMouse);
document.getElementById("target_div").addEventListener("wheel", scrollMouse);


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    //alert('keydown event\n\n' + 'key: ' + keyName);
    console.log(keyName)
});

//function myFunction() {
//    var video = document.getElementById(videoId);
//    video.currentTime = video.currentTime + 1;
//}

function scrollMouse(event) {


    var video = document.getElementById(videoId);
    var y = event.deltaY;
    var elementById = parseFloat(document.getElementById(rateId).value);
    if (y > 0) {
        video.currentTime = video.currentTime + elementById;
    } else {

        video.currentTime = video.currentTime - elementById;
    }

}

$('a').trigger('click');

function getVideoFromLink(id) {

    $(function () {
        $.getJSON("http://xlearning.ddns.net/youtubeapi/api/videoUrl?text=" + id, function (data) {

            var items = [];
            $.each(data, function (key, val) {
                items.push("<li>" + val + "</li>")

            });
            var video = $('#video')[0];
            video.src = data.url;
            video.load();
            //video.play();
            // $("#video").html('<source src=' + data.url + '</source>' );

            // $("#video").html(items.join(""));

        });
    })

}

//#region teste
var stv

function autoPlay() {
    console.trace();
    stv = setInterval(function () {
        var elementById = parseFloat(document.getElementById(rateId).value);
        video.currentTime = video.currentTime + elementById;
    }, 100);
}

function stopAutoPlay() {
    clearInterval(stv);
}

//#endregion

$(function () {
    $("#playlist li").on("click", function () {
        $("#video").attr({
            "src": $(this).attr("movieurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#video").attr({
        "src": $("#playlist li").eq(0).attr("movieurl"),
        "poster": $("#playlist li").eq(0).attr("moviesposter")
    })
}) // JavaScript Document
