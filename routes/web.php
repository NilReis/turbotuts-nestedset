<?php

use App\Http\Controllers\api\CategoryJson;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\VideoController;
use Database\Seeders\VideoSeeder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('dashboard', [App\Http\Controllers\HomeController::class, 'dashboard'])->name('dashboard');
Route::get('menu/{id}', [App\Http\Controllers\HomeController::class, 'menu'])->name('menu');


//Route::get('/', [CategoryController::class,'index']);

//Route::post('/category/create/{pid}', [CategoryController::class,'create']);


Route::get('/playlist/category/{id}', [PlaylistController::class, 'playslistCategory']);

Route::post('/playlist/add/{id}', [PlaylistController::class, 'addrange']);

Route::get('/playlist/additens/{id}', [PlaylistController::class, 'additens']);

Route::post('/playlist/create', [PlaylistController::class, 'create']);

Route::post('/video/store', [VideoController::class, 'store']);

Route::get('/video/addchapter', [VideoController::class, 'AddChapter']);



Route::get('/tasks', [App\Http\Controllers\TaskController::class, 'index'])->name('task.index')->middleware('auth');
Route::post('/tasks', [App\Http\Controllers\TaskController::class, 'store'])->name('task.store');









//Route::get('/category/show', [CategoryController::class, 'show']);

Route::get('/playlist/{id}', [PlaylistController::class, 'show']);


Route::middleware(['cors'])->group(function () {

});

Route::resource('category', CategoryController::class);
