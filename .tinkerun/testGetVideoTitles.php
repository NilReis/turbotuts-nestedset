<?php

use App\Models\Video;

$videos = Video::select('id','title')->where('playlist_id', '=', 242)->get();
