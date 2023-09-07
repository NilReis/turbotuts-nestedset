<?php


use App\Models\Category;



$categories = Category::where('id', '=', 1)->get();
