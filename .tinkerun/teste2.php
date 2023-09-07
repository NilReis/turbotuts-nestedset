<?php
use App\Http\Controllers\PlaylistController;
use  App\Http\Controllers\api\TopicJson;
use App\Models\Category;


$data = Category::get();

$data = $data->toArray();



$itemsByReference = array();

// Build array of item references:
foreach ($data as $key => &$item) {
    $itemsByReference[$item['id']] = &$item;

}

// Set items as children of the relevant parent item.
foreach ($data as $key => &$item)
    if ($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
        $itemsByReference[$item['parent_id']]['submenu'][] = &$item;

// Remove items that were added to parents elsewhere:
foreach ($data as $key => &$item) {
    if ($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
        unset($data[$key]);

    $item['url'] = 'playlist/category/' . $item['id'];
}



print_r($data);

