<?php

use App\Models\Category;



$categories = Category::where('parent_id', '=', 0)->get();
$allCategories = Category::pluck('text','id')->all();

echo "teste1";

foreach ($categories as $key => $category) {
    echo($category->text);

    if (count($category->childs)) {

        # code...
    }



}
