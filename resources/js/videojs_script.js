// let setStartPosition  = 0;
// var options = { "techOrder": ["html5", "youtube", "flash"] };
// var player = videojs('preview-player', {
//   playbackRates: [0.5, 1, 1.5, 2, 5, 10]
// });

// var player = videojs('preview-player', options);

var player = videojs(document.querySelector("video"), {
    //inactivityTimeout: 0 // HIDE OR NOTE CONTROL BAR
});



//-------------------------


var skipBehindButton = player.controlBar.addChild("button");
var skipBehindButtonDom = skipBehindButton.el();
skipBehindButtonDom.innerHTML = "30<<";
skipBehindButton.addClass("buttonClass");

skipBehindButtonDom.onclick = function() {
    skipS3MV(-30);
}

//-------------------------

var skipAheadButton = player.controlBar.addChild("button");
var skipAheadButtonDom = skipAheadButton.el();
skipAheadButtonDom.innerHTML = ">>30";
skipAheadButton.addClass("buttonClass");

skipAheadButtonDom.onclick = function() {
    skipS3MV(30);
}

function skipS3MV(skipBy) {
    player.currentTime(player.currentTime() + skipBy);
}
//-------------------------
var myButton = player.controlBar.addChild("button");
var myButton2 = player.controlBar.addChild("button");


// There are many functions available for button component
// like below mentioned in this docs
// https://docs.videojs.com/button.
// You can set attributes and clasess as well.

// Getting html DOM
var myButtonDom = myButton.el();
var myButtonDom2 = myButton2.el();

// Since now you have the html dom element
// you can add click events

// Now I am setting the text as you needed.
myButtonDom.innerHTML = '<div id="ShowSkip" > </div>';


myButtonDom2.innerHTML = '<button type="button" >Launch modal</button>';


myButtonDom2.onclick = function() {
    $('#exampleModal').modal('show')

    $("#chapter-time").val(player.currentTime())


    console.log("ShowModal");

}



myButtonDom.onclick = function() {
    $("#innerSplitter").ejSplitter();
    // Create splitter control
    if (myButtonDom.innerHTML == "Hide") {
        $("#innerSpliter").data("ejSplitter").collapse(1);
        myButtonDom.innerHTML = "Show"
    } else {
        $("#innerSpliter").data("ejSplitter").expand(1);
        myButtonDom.innerHTML = "Hide"
    }
}

var buttonComponent1 = videojs.getComponent('MenuButton');
var prevButton1 = videojs.extend(buttonComponent1, {
    constructor: function() {
        buttonComponent1.apply(this, arguments);
        this.addClass('fa fa-spinner fa-spin vjs-menu-button vjs-control vjs-button');
        this.controlText('Previous4546546');
    },
    handleClick: function(e) {
        player.playlist.previous();
    }
});

var buttonComponent = videojs.getComponent('Button');
var prevButton = videojs.extend(buttonComponent, {
    constructor: function() {
        buttonComponent.apply(this, arguments);
        this.addClass('vjs-icon-previous-item');
        this.controlText('Previous');
    },
    handleClick: function(e) {
        player.playlist.previous();
    }
});

var nextButton = videojs.extend(buttonComponent, {
    constructor: function() {
        buttonComponent.apply(this, arguments);
        this.addClass('vjs-icon-next-item');
        this.controlText('Next');
    },
    handleClick: function(e) {

        player.playlist.next();
        // this.controlText('Next (part 3)');
    }
});

videojs.registerComponent('prevButton', prevButton);
videojs.registerComponent('nextButton', nextButton);


player.getChild('controlBar').addChild('prevButton', {}, 0);
player.getChild('controlBar').addChild('nextButton', {}, 2);

player.playlist(videoList);
player.playlist.autoadvance(0);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
player.playlistUi();


// player.on('loadstart', () => { console.log("teste1") });


// player.currentResolution('HD');
// player.snapshot();


