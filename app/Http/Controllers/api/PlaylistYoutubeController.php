<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Google_Client;
use Google_Service_YouTube;
use YouTube\YouTubeDownloader;
use YouTube\Exception\YouTubeException;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\API\DateTime;
use App\Http\Services\YouTubePlaylistService; 




class PlaylistYoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validando o ID da playlist e category_id passados no request
        $validatedData = $request->validate([
            'playlist_id' => 'required|string',
            'category_id' => 'required|integer'
        ]);

        try {
            // Instanciando o serviço YouTubePlaylistService com $usePythonScript = true
            $youtubePlaylistService = app(\App\Http\Services\YouTubePlaylistService::class);


            // Chame o método do serviço para adicionar a playlist
            $playlist = $youtubePlaylistService->addPlaylist($validatedData['playlist_id'], $validatedData['category_id']);

            // Aqui, você pode retornar a resposta desejada, por exemplo, a playlist adicionada
            return response()->json(['message' => 'Playlist added successfully', 'playlist' => $playlist], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error adding playlist', 'error' => $e->getMessage()], 500);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        echo $id;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $playlistId = $request->input('playlist_id'); // ID da playlist na API do YouTube
        $categoryId = $request->input('category_id'); // Categoria da playlist, pode ser nulo ou vazio

        $request->validate([
            'playlist_id' => 'sometimes|required|string',
            // 'category_id' => 'required|integer', // Removido para permitir que category_id seja opcional
        ]);

        $youtubePlaylistService = new YouTubePlaylistService();
        return $youtubePlaylistService->updatePlaylist($playlistId, $categoryId);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getDownloadLink($youtube_id)
    {
        $youtube = new YouTubeDownloader();

        try {
            $downloadOptions = $youtube->getDownloadLinks(
                'https://www.youtube.com/watch?v=' . $youtube_id
            );

            if ($downloadOptions->getAllFormats()) {
                $varFilter = array_filter(
                    $downloadOptions->getAllFormats(),
                    function ($v, $k) {
                        return $k == $k && $v->quality == 'hd720';
                    },
                    ARRAY_FILTER_USE_BOTH
                );

                $numericIndexedArray = array_values($varFilter);

                // Aqui, você pode fornecer um nome de arquivo específico ou deixá-lo como nulo para gerar um nome automaticamente.
                $this->saveVideoFromUrl($numericIndexedArray[0]->url, $youtube_id . ".mp4");
            } else {
                return null;
            }
        } catch (YouTubeException $e) {
            return null;
        }
    }

    public function saveVideoFromUrl($url, $filename)
    {
        try {
            $client = new Client();
            $response = $client->get($url);

            if ($response->getStatusCode() == 200) {
                $fileContent = $response->getBody()->getContents();


                // Aqui, estamos armazenando o arquivo no disco 'local'. Você pode mudar isso conforme necessário.
                Storage::disk('local')->put('/public/videos/' . $filename, $fileContent);

                return $filename; // Retorne o nome do arquivo para referência futura
            } else {
                throw new \Exception("Failed to fetch the file from URL: $url");
            }
        } catch (\Exception $e) {
            // Aqui você pode lidar com a exceção, por exemplo, registrando o erro ou retornando uma resposta de erro
            Log::error(
                'An error occurred while saving the video from URL: ' .
                    $e->getMessage()
            );
            return null; // Você pode retornar uma resposta adequada aqui
        }
    }

}
