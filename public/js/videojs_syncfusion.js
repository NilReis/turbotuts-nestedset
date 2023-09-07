let canStore = false;
let startPosition = 0;
let intSeek = 0;
// let setStartPosition  = 0;
let speedSkip = 1;

function MoveTouch(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    //      document.getElementById("demo").innerHTML = x + ", " + y;
    // alert("stest");

    var elementById = parseFloat(1);
    if (canStore) {
        startPosition = event.touches[0].clientX
        // console.log("Start -" + startPosition);
        canStore = false;
    } else {
        //console.log("Result -");
        var currentMove = startPosition - event.touches[0].clientX;
        if (intSeek == 0) {
            intSeek = Math.abs(currentMove);
            console.log("grava inicio")
        }
        if ((Math.abs(currentMove) > intSeek)) {
            if (Math.sign(currentMove) > 0) {
                console.log("currenteTime: " + player.currentTime());
                player.currentTime(player.currentTime() - elementById); // 2 minutes into the video
                // video.currentTime -= elementById;
                console.log("voltando");
            } else {
                console.log("currenteTime: " + player.currentTime());
                player.currentTime(player.currentTime() + elementById); // 2 minutes into the video
                // video.currentTime += elementById;
                console.log("avancado");
            }
            intSeek = intSeek + 50;
        } else {
            // intSeek = 0
        }
        //console.log(currentMove);
        //$('display').innerHTML = currentMove;
    }
}

document.getElementById("emiliosalas_player1").addEventListener("wheel", scrollMouse);

function setStartPosition() {
    canStore = true;
    intSeek = 0;
}

function scrollMouse(event) {
    // console.trace();
    // var video = document.getElementById(videoId);

    // speedSkip = parseFloat(getCookie("speedSkip")); //"bobthegreat@gmail.com"
    speedSkip = parseFloat(document.getElementsByClassName('vjs-playback-rate-value')[0].innerText.replace("x", ""));


    let y = event.deltaY;
    if (event.buttons == 4) {

        let elementById = parseFloat(20);
        if (y > 0) {

            speedSkip -= 0.5
        } else {

            speedSkip += 0.5
        }
        setCookie("speedSkip", speedSkip, 1); //set "user_email" cookie, expires in 30 days
    } else {

        if (y > 0) {
            player.currentTime(player.currentTime() - speedSkip)
        }
        if (y < 0) {
            player.currentTime(player.currentTime() + speedSkip)
        }
    }

    $("#ShowSkip").html(getCookie("speedSkip"));

    // console.log(getCookie("speedSkip"))
}


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


function searchVideo() {
    let txt = $("#searchvideo").val();
    $.getJSON('../Api/GetVideos.php?text=' + txt, function (data) {
        player.playlist(data);
        // Initialize the playlist-ui plugin with no option (i.e. the defaults).
        player.playlistUi();
    })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });;

}

function captureVideo(video) {
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(video, 0, 0);
    return canvas.toDataURL('image/png');
}

//-----------------------------
