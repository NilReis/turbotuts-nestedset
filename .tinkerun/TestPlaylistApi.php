<?php

use App\Models\Playlist;

$playlists = Playlist::where('category_id', '1')->get();
