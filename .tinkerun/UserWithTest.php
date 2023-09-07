<?php

use App\Models\Video;

$video = Video::where('id', 1)->with('marker')->first();

dd($video->marker);
