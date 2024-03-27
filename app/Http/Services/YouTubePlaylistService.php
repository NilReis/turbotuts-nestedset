<?php

namespace App\Http\Services;

use App\Models\Playlist;
use App\Models\Video;
use Google_Client;
use Google_Service_YouTube;
use Exception;

class YouTubePlaylistService
{
    private $usePythonScript;

    public function __construct($usePythonScript = false)
    {
        $this->usePythonScript = $usePythonScript;
    }

    public function addPlaylist($playlistId, $categoryId)
    {
        if ($this->usePythonScript) {
            return $this->addPlaylistUsingPythonScript($playlistId, $categoryId);
        } else {
            return $this->addPlaylistUsingYouTubeAPI($playlistId, $categoryId);
        }
    }

    private function addPlaylistUsingYouTubeAPI($playlistId, $categoryId)
    {
        try {
            $client = new Google_Client();
            $apiKey = env('YOUTUBE_API_KEY');
            if (!$apiKey) {
                throw new Exception('API key not configured.');
            }
            $client->setDeveloperKey($apiKey);
            $youtube = new Google_Service_YouTube($client);

            $playlistItemsResponse = $youtube->playlists->listPlaylists('id, snippet, contentDetails', ['id' => $playlistId]);
            $items = $playlistItemsResponse['items'];
            if (empty($items)) {
                return response()->json(['message' => 'Playlist not found or empty'], 404);
            }

            $item = $items[0];
            $playlist = Playlist::firstOrNew(['playlist_id' => $item->id]);
            $playlist->category_id = $categoryId;
            $playlist->title = $item->snippet->title;
            $playlist->description = $item->snippet->description;
            $playlist->thumbnail = $item->snippet->thumbnails->default->url;
            $playlist->published_at = new \DateTime($item->snippet->publishedAt);
            $playlist->kind = $item->kind;
            $playlist->type = 'youtube#playlist';
            $playlist->video_count = $item->contentDetails->itemCount;
            $playlist->save();

            $response = $youtube->playlistItems->listPlaylistItems('id, snippet, contentDetails', [
                'playlistId' => $item->id,
                'maxResults' => 25,
            ]);

            foreach ($response['items'] as $videoItem) {
                $video = Video::firstOrNew(['youtube_id' => $videoItem['snippet']['resourceId']['videoId']]);
                $video->title = $videoItem['snippet']['title'];
                $video->description = $videoItem['snippet']['description'];
                $video->duration = '00:00:00'; // Handle duration appropriately
                $video->source_src = $videoItem['snippet']['resourceId']['videoId'];
                $video->source_type = 'video/youtube';
                $video->thumbnail_src = $videoItem['snippet']['thumbnails']['medium']['url'];
                $video->thumbnail_media = '(min-width: 400px;)';
                $video->thumbnail_type = 'image/jpeg';
                $video->channel_id = $videoItem['snippet']['channelId'];
                // Supondo que $videoItem['snippet']['publishedAt'] é a string de data que você está tentando analisar
                $publishedAt = $videoItem['snippet']['publishedAt'];

                // Verifica se a string de data está disponível e é válida
                if (!empty($publishedAt)) {
                    try {
                        $video->published_at = new \DateTime($publishedAt);
                    } catch (\Exception $e) {
                        // Se a string de data não for válida, você pode definir um valor padrão ou não definir o campo
                        $video->published_at = null; // Ou qualquer valor padrão que faça sentido para o seu caso
                    }
                } else {
                    // Se a string de data não estiver disponível, você pode definir um valor padrão ou não definir o campo
                    $video->published_at = null; // Ou qualquer valor padrão que faça sentido para o seu caso
                }
                $video->playlist_id = $playlist->id;
                $video->save();
            }

            $playlist->save();
            return response()->json(['message' => 'Playlist added successfully', 'playlist' => $playlist], 201);
        } catch (Exception $e) {
            return response()->json(['message' => 'Error adding playlist', 'error' => $e->getMessage()], 500);
        }
    }
    public function updatePlaylist($playlistId, $categoryId)
    {
        if ($this->usePythonScript) {
            return $this->updatePlaylistUsingPythonScript($playlistId, $categoryId);
        } else {
            return $this->updatePlaylistUsingYouTubeAPI($playlistId, $categoryId);
        }
    }

    private function updatePlaylistUsingYouTubeAPI($playlistId, $categoryId)
    {
        try {
            $client = new Google_Client();
            $apiKey = env('YOUTUBE_API_KEY');
            if (!$apiKey) {
                throw new Exception('API key not configured.');
            }
            $client->setDeveloperKey($apiKey);
            $youtube = new Google_Service_YouTube($client);

            // Busca a playlist pelo ID na tabela ou pelo playlist_id
            $playlist = Playlist::where('playlist_id', $playlistId)->firstOrFail();

            // Atualiza a categoria da playlist apenas se um categoryId válido for fornecido
            if (!empty($categoryId)) {
                $playlist->category_id = $categoryId;
            }

            // Atualiza informações da playlist com base na API do YouTube
            $playlistItemsResponse = $youtube->playlists->listPlaylists('id, snippet, contentDetails', ['id' => $playlist->playlist_id]);

            if (empty($playlistItemsResponse['items'])) {
                throw new Exception('Playlist not found or empty');
            }

            $item = $playlistItemsResponse['items'][0];
            $playlist->title = $item->snippet->title;
            $playlist->description = $item->snippet->description;
            $playlist->thumbnail = $item->snippet->thumbnails->default->url;
            $playlist->published_at = new \DateTime($item->snippet->publishedAt);
            $playlist->kind = $item->kind;
            $playlist->video_count = $item->contentDetails->itemCount;
            $playlist->save();

            // Atualiza os vídeos associados à playlist
            $response = $youtube->playlistItems->listPlaylistItems('id, snippet, contentDetails', [
                'playlistId' => $playlist->playlist_id,
                'maxResults' => 25, // ou mais, até 50
            ]);

            foreach ($response['items'] as $videoItem) {
                // Verifica se o vídeo já existe antes de atualizar
                $video = Video::firstOrNew(['youtube_id' => $videoItem['snippet']['resourceId']['videoId']]);
                if ($video->exists) {
                    $video->title = $videoItem['snippet']['title'];
                    $video->description = $videoItem['snippet']['description'];
                    $video->duration = '00:00:00'; // Trate a duração de forma apropriada
                    $video->source_src = $videoItem['snippet']['resourceId']['videoId'];
                    $video->source_type = 'video/youtube';
                    $video->thumbnail_src = $videoItem['snippet']['thumbnails']['medium']['url'];
                    $video->channel_id = $videoItem['snippet']['channelId'];
                    $video->published_at = new \DateTime($videoItem['snippet']['publishedAt']);
                    $video->playlist_id = $playlist->id;
                    $video->save();
                }
            }

            return response()->json(['message' => 'Playlist updated successfully', 'playlist' => $playlist], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating playlist', 'error' => $e->getMessage()], 500);
        }
    }

    private function updatePlaylistUsingPythonScript($playlistId, $categoryId)
    {
        // Caminho para o interpretador Python e para o script Python
        $pythonPath = '/usr/bin/python3';
        $scriptPath = '/var/www/youtube_playlist_data.py';

        // URL da playlist que você deseja analisar
        $playlistUrl = 'https://www.youtube.com/playlist?list=' . $playlistId;

        if (!file_exists($scriptPath)) {
            return response()->json(['error' => 'Script not found at ' . $scriptPath], 404);
        }

        $checkPythonCommand = escapeshellcmd($pythonPath . ' --version');
        $pythonVersion = shell_exec($checkPythonCommand);

        if (strpos($pythonVersion, 'Python 3') === false) {
            return response()->json(['error' => 'Python 3 not found at ' . $pythonPath], 500);
        }

        exec("$pythonPath $scriptPath '$playlistUrl'", $output, $return);

        if ($return === 0) {
            $data = json_decode(implode("\n", $output), true);

            // Processa os dados da playlist retornados pelo script
            $playlistInfo = $data['playlist_info'];
            $videosData = $data['videos_data'];

            // Atualiza os dados da playlist
            $playlist = Playlist::where('playlist_id', $playlistId)->firstOrFail();
            $playlist->category_id = $categoryId;
            $playlist->title = $playlistInfo['description'];
            $playlist->description = $playlistInfo['description'];
            $playlist->thumbnail = $playlistInfo['thumbnail'];
            $playlist->published_at = $playlistInfo['publishedAt'] ? new \DateTime($playlistInfo['publishedAt']) : null;
            $playlist->video_count = $playlistInfo['itemCount'];
            $playlist->save();

            // Atualiza os dados dos vídeos
            foreach ($videosData as $videoData) {
                $video = Video::firstOrNew(['youtube_id' => $videoData['id']]);
                $video->title = $videoData['title'];
                $video->duration = $videoData['duration']; // Ajuste conforme necessário
                $video->youtube_id = $videoData['id'];
                $video->thumbnail_src = $videoData['thumbnail_url'];
                $video->published_at = new \DateTime($videoData['publishedAt']);
                $video->playlist_id = $playlist->id;
                $video->save();
            }

            return response()->json(['message' => 'Playlist and videos updated successfully', 'playlist' => $playlist], 200);
        } else {
            return response()->json(['error' => 'Error executing Python script'], 500);
        }
    }

    private function addPlaylistUsingPythonScript($playlistId, $categoryId)
    {
        // Caminho para o interpretador Python e para o script Python
        $pythonPath = '/usr/bin/python3';
        $scriptPath = '/var/www/youtube_playlist_data.py';

        // URL da playlist que você deseja analisar
        $playlistUrl = 'https://www.youtube.com/playlist?list=' . $playlistId;

        if (!file_exists($scriptPath)) {
            return response()->json(['error' => 'Script not found at ' . $scriptPath], 404);
        }

        $checkPythonCommand = escapeshellcmd($pythonPath . ' --version');
        $pythonVersion = shell_exec($checkPythonCommand);

        if (strpos($pythonVersion, 'Python 3') === false) {
            return response()->json(['error' => 'Python 3 not found at ' . $pythonPath], 500);
        }

        exec("$pythonPath $scriptPath '$playlistUrl'", $output, $return);

        if ($return === 0) {
            $data = json_decode(implode("\n", $output), true);

            // Processa os dados da playlist retornados pelo script
            $playlistInfo = $data['playlist_info'];
            $videosData = $data['videos_data'];

            // Salva os dados da playlist
            $playlist = Playlist::firstOrNew(['playlist_id' => $playlistId]);
            $playlist->category_id = $categoryId;
            $playlist->title = $playlistInfo['description'];
            $playlist->description = $playlistInfo['description'];
            $playlist->thumbnail = $playlistInfo['thumbnail'];
            $playlist->published_at = $playlistInfo['publishedAt'] ? new \DateTime($playlistInfo['publishedAt']) : null;
            $playlist->video_count = $playlistInfo['itemCount'];
            $playlist->save();

            // Salva os dados dos vídeos
            foreach ($videosData as $videoData) {
                $video = Video::firstOrNew(['youtube_id' => $videoData['id']]);
                $video->title = $videoData['title'];
                $video->duration = $videoData['duration']; // Ajuste conforme necessário
                $video->youtube_id = $videoData['id'];
                $video->thumbnail_src = $videoData['thumbnail_url'];
                $video->published_at = new \DateTime($videoData['publishedAt']);
                $video->playlist_id = $playlist->id;
                $video->save();
            }

            return response()->json(['message' => 'Playlist and videos added successfully', 'playlist' => $playlist], 201);
        } else {
            return response()->json(['error' => 'Error executing Python script'], 500);
        }
    }
}
