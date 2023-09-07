<?php

// use App\Http\Controllers\PlaylistController;
// use App\Models\Playlist;

// $playlistController = new PlaylistController;
// $playlistController->AddPlaylist("PLx3jFshHO0DlaUxe3Feel0KZZ9YjLsuz-", 15);

// echo 'fim';

use Illuminate\Support\Facades\Storage;

Storage::disk('public')->put('filename.txt', 'Contents');