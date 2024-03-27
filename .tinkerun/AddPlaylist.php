<?php

$client = new \Google_Client();
$client->setDeveloperKey('AIzaSyAekVZGQdFN00o79JAx-SSV-15ad_Nv23A');

$youtube = new \Google_Service_YouTube($client);
$playlistId = 'PLqDySLfPKRn6fgrrdg4_SmsSxWzVlUQJo';


$response = $youtube->playlistItems->listPlaylistItems('id, snippet, contentDetails', [
    'playlistId' => $playlistId,
    'maxResults' => 25,
]);

foreach ($response['items'] as $item) {
    $video = new \App\Models\Video();
    $video->youtube_id = $item['snippet']['resourceId']['videoId'];
    $video->title = $item['snippet']['title'];
    $video->description = $item['snippet']['description'];
    $video->duration = '00:00:00';  // Duration needs to be fetched separately or set to a default value
    $video->source_src = $item['snippet']['resourceId']['videoId'];
    $video->source_type = 'video/youtube';
    $video->thumbnail_src = $item['snippet']['thumbnails']['medium']['url'];
    $video->thumbnail_media = '(min-width: 400px;)';
    $video->thumbnail_type = 'image/jpeg';
    $video->channel_id = $item['snippet']['channelId'];
    $video->published_at = new \DateTime($item['snippet']['publishedAt']);
    $video->playlist_id = 12; // Assuming this is the ID of your playlist in your own system
    $video->save();
}
