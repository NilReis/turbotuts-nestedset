function teste(params) {
    alert("teste");
}

function searchItems1(keyword) {
    console.log(keyword);
    //show page loading


    $.getJSON('http://localhost:8081/api/Search?text=' + keyword, function (data) {
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
        
    }).error(function () {
        console.log("The service is unavailable.");


    });
}
