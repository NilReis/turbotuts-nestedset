<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $shops = [
            [
                'name' => 'Code',
                'children' => [
                    [
                        'name' => 'PHP',
                        'children' => [
                            ['name' => 'Vanila'],
                            ['name' => 'Laravel'],
                            ['name' => 'Packages'],
                        ],
                    ],
                    [
                        'name' => 'Python',
                        'children' => [
                            ['name' => 'Vanila'],
                            ['name' => 'Django'],
                            ['name' => 'Packages'],
                        ],
                    ],
                ],
            ],
            [
                'name' => '3D',
                'children' => [
                    [
                        'name' => 'Sketchup',
                        'children' => [
                            ['name' => 'Geral'],
                            ['name' => 'Plugins'],
                        ],
                    ],
                    [
                        'name' => 'Blender',
                        'children' => [
                            ['name' => 'Geral'],
                            ['name' => 'Plugins'],
                        ],
                    ],
                ],
            ],
        ];
        foreach ($shops as $shop) {
            Category::create($shop);
        }
    }
}
