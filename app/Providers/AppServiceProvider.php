<?php

namespace App\Providers;

use App\Models\Menu;
use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Contracts\Events\Dispatcher;
use JeroenNoten\LaravelAdminLte\Events\BuildingMenu;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }


    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Dispatcher $events)
    {
        //app('url')->forceRootUrl('https://nindinbxwo.sharedwithexpose.com/');
        Paginator::useBootstrap();


        $events->listen(BuildingMenu::class, function (BuildingMenu $event) {

            $event->menu->add('MENU DE NAVEGAÇÃO');

            $event->menu->add('Gegenciar Categeorias', [
                'key' => 'account_settings_notifications',
                'text' => 'Gegenciar Categeorias',
                'url' => 'category',
            ]);


            /* Database connection start */
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "turbotuts-nestedset";
            $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }


            $sql = "SELECT * FROM `categories`";
            $res = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
            //iterate on results row and create new index array of data
            while ($row = mysqli_fetch_assoc($res)) {
                $temp["id"] = $row["id"];
                $temp["text"] = $row["name"];
                $temp["parent_id"] = $row["parent_id"];
                $data[] = $temp;
            }
            $itemsByReference = array();

            // Build array of item references:
            foreach ($data as $key => &$item) {


                $itemsByReference[$item['id']] = &$item;
                // Children array:
                // $itemsByReference[$item['id']]['submenu'] = array();
                // Empty data class (so that json_encode adds "data: {}" )
                // $itemsByReference[$item['id']]['data'] = [];
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


            $event->menu->add(...$data);
            // self::get_categories($data, $event);


        });

    }
}
