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



class PlaylistYoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $client = new Google_Client();

            // Use a chave de API a partir de uma variável de ambiente ou configuração
            $apiKey = env('YOUTUBE_API_KEY'); // Supondo que você tenha definido a chave em seu arquivo .env
            $client->setDeveloperKey($apiKey);

            $youtube = new Google_Service_YouTube($client);

            $items = [];
            $nextPageToken = null;

            do {
                $playlistItemsResponse = $youtube->playlistItems->listPlaylistItems(
                    'id, snippet, contentDetails',
                    [
                        'playlistId' => request('playlistId'),
                        'maxResults' => 100,
                        'pageToken' => $nextPageToken,
                    ]
                );

                foreach ($playlistItemsResponse['items'] as $playlistItem) {
                    $items[] = $playlistItem;
                    //$topic = $this->AddTopicChild($playlistItem, $playlistSaveid); // Se você quiser usar isso, descomente
                }

                $nextPageToken =
                    $playlistItemsResponse['nextPageToken'] ?? null;
            } while ($nextPageToken);

            return $items;
        } catch (\Exception $e) {
            // Aqui você pode lidar com a exceção, por exemplo, retornando uma resposta de erro
            return response()->json(
                ['error' => 'An error occurred: ' . $e->getMessage()],
                500
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
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
