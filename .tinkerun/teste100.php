<?php

use App\Models\Category;

$categories = Category::withDepth()
->with('ancestors')
->get()
->toTree();
