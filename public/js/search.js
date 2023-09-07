var globalID;
var videoPlaylist = [];
/* $(function () {
    console.log('setTimeout');
    setTimeout(hideSplash, 2200);
});

function hideSplash() {
    $.mobile.changePage("#searchPage", "none");
} */

function searchItems(keyword) {
    console.log(keyword);
    //show page loading
    if (keyword != "") {
        $.mobile.loading("show", {
            text: "Loading...",
            textVisible: true,
            theme: "b",
            html: ""
        });
    }

    $.getJSON('http://xlearning.ddns.net/youtubeapi/api/Search?text=' + keyword, function (data) {
        var testData = data;
        $('#result').empty();
        $.each(data, function (index, element) {
            var url = "#player";
            var img = element.thumbnails.lowResUrl;

            var video_item = {
                video_id: element.id.value,
                title : element.title
            };

            videoPlaylist.push(video_item);
            var listitem = '<li data-icon="carat-r" id = "' + (videoPlaylist.length - 1) + '"><a href="' + url + '" data-transition="slide"><img src="' + img + '" height="80" width="80"><p><strong>' + element.title + '</strong></p><p>(' + element.duration + ')</p></a></li>';
            $('#result').append(listitem);
            $('#result').listview('refresh');
        });
        $.mobile.loading("hide"); // hide when load data successfull
    }).error(function () {
        console.log("The service is unavailable.");
        $.mobile.loading("hide");
        $.mobile.changePage("#error", "fade");
    });
}

function searchPlaylistItems(keyword) {
    console.log(keyword);
    //show page loading
    if (keyword != "") {
        $.mobile.loading("show", {
            text: "Loading...",
            textVisible: true,
            theme: "b",
            html: ""
        });
    }

    $.getJSON('http://xlearning.ddns.net/youtubeapi/api/Playlist?text=' + keyword, function (data) {
        $('#resultPlaylist').empty();
        $.each(data, function (index, element) {
            var url = "#player";
            var img = element.thumbnails.lowResUrl;

            var video_item = {
                video_id: element.id.value,
                title : element.title
            };

            videoPlaylist.push(video_item);
            var listitem = '<li data-icon="carat-r" id = "' + (videoPlaylist.length - 1 ) + '"><a href="' + url + '" data-transition="slide"><img src="' + img + '" height="80" width="80"><p><strong>' + element.title + '</strong></p><p>(' + element.duration + ')</p></a></li>';
            $('#resultPlaylist').append(listitem);
            $('#resultPlaylist').listview('refresh');
        });
        $.mobile.loading("hide"); // hide when load data successfull
    }).error(function () {
        console.log("The service is unavailable.");
        $.mobile.loading("hide");
        $.mobile.changePage("#error", "fade");
    });
}

function searchVideoItems(keyword) {
    console.log(keyword);
    $('#resultVideoLink').empty();
    //show page loading
    if (keyword != "") {
        $.mobile.loading("show", {
            text: "Loading...",
            textVisible: true,
            theme: "b",
            html: ""
        });
    }

         var url = "#player";
         //var img = element.thumbnails.lowResUrl;

         var video_item = {
             video_id: keyword,
             title : "teste"
         };

         videoPlaylist.push(video_item);

    var listitem = '<li data-icon="carat-r" id = "' + (videoPlaylist.length - 1) + '"><a href="' + url + '" data-transition="slide"></a></li>';
    $('#resultVideoLink').append(listitem);
    $('#resultVideoLink').listview('refresh');

    $.mobile.loading("hide");


}
