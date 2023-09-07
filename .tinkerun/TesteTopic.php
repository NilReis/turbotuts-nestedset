<?php

use App\Models\Topic;
//$topics = Topic::whereplaylist_id(1);


$topic = Topic::where('playlist_id', '=', 206)->orderByDesc('position')->get();


$dataTree = [];

foreach ($topic as $tp ) {
    $data ["id"] = $tp->id;
    $data ["parent"] = $tp->parent_id;
    $data ["text"] = $tp->topic_name;
    $dataTree[] = $data;
}


$json_data = json_encode($dataTree);


