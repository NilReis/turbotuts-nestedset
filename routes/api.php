<?php

use App\Http\Controllers\api\CategoryJson;
use App\Http\Controllers\api\SnapshotController;
use App\Http\Controllers\api\TopicJson;
use App\Http\Controllers\MarkerController;
use App\Models\snapshot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\VideoApi;
use App\Http\Controllers\api\PlaylistYoutubeController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/add-to-download-queue', 'VideoController@addToDownloadQueue');

Route::resource('/snapshots', SnapshotController::class );
Route::resource('/categoryjson', CategoryJson::class );
//Route::resource('/topicjson', TopicJson::class );
Route::get('/topicjson/load/{id}', [TopicJson::class, 'load']);
Route::post('/categoryjson/operation/', [CategoryJson::class, 'operation']);
Route::post('/topicjson/addTopic/', [TopicJson::class, 'addTopic']);


Route::post('/topicjson/getyoutubelink/', [TopicJson::class, 'getYoutubeLink']);

Route::get('/topicjson/getCurrentVideo/{id}', [TopicJson::class, 'getCurrentVideo']);
Route::get('/topicjson/PreviuosVideo/{id}', [TopicJson::class, 'PreviuosVideo']);
Route::get('/topicjson/NextVideo/{id}', [TopicJson::class, 'NextVideo']);

Route::get('/topicjson/videoTitles/{id}', [TopicJson::class, 'VideoTitles']);


//Route::resource('/marker', MarkerjsonController::class );
// Route::get('/category/show', [CategoryController::class, 'show']);
//Route::apiResource('marker', MarkerjsonController::class);
Route::apiResource("marker", "App\Http\Controllers\api\MarkerJsonControlador");
Route::apiResource("playist", "App\Http\Controllers\api\PlaylistApi");

Route::apiResource("playlists", "App\Http\Controllers\api\PlaylistYoutubeController");


// Rota para o método index com parâmetro
Route::get('video/{playlistId}', [VideoApi::class, 'index']);

// Rota para o método show com parâmetro
Route::get('video/show/{videoId}', [VideoApi::class, 'show']);
Route::get('/videos/{id}', [VideoApi::class, 'show']);


Route::apiResource("video", "App\Http\Controllers\api\VideoApi");

Route::get('get-download-link/{youtube_id}', [PlaylistYoutubeController::class, 'getDownloadLink']);
Route::apiResource("playlist-youtube", "App\Http\Controllers\api\PlaylistYoutubeController");


Route::get('/youtube/playlist/{category}/{subcategory}/{playlistId}', [PlaylistYoutubeController::class, 'getVideosFromPlaylistByCategory']);

//Route::get('/marker', [MarkerjsonController::class, 'getCurrentVideo']);


