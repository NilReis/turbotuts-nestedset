<?php

// use YouTube\YouTubeDownloader;
// use YouTube\Exception\YouTubeException;
use App\Http\Controllers\VideoController;

$videoController = new VideoController();

// Substitua 'videoId' pelo ID do vídeo que você deseja testar
$videoId = 'R5YYrt75VwM';
echo 'teste';

// Chama o método downloadVideo
$videoController->downloadVideo($videoId);