<?php

namespace App\Providers;

use App\Models\Menu;
use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Contracts\Events\Dispatcher;
use JeroenNoten\LaravelAdminLte\Events\BuildingMenu;
use Illuminate\Support\Facades\DB;
use App\Models\Category;


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
        // app('url')->forceRootUrl('http://nil-reis.sa-1.sharedwithexpose.com/');
        Paginator::useBootstrap();


        $events->listen(BuildingMenu::class, function (BuildingMenu $event) {

            $event->menu->add('MENU DE NAVEGAÇÃO');

            $event->menu->add('Gegenciar Categeorias', [
                'key' => 'account_settings_notifications',
                'text' => 'Gegenciar Categeorias',
                'url' => 'category',
            ]);


            // Carregar todas as categorias com subcategorias
            $categories = Category::with('children')->get();

            // Preparar os itens do menu
            $menuItems = $this->prepareMenuItems($categories);

            // Adicionar itens ao menu
            $event->menu->add(...$menuItems);
        });
    }
    
    private function prepareMenuItems($categories, $isSubmenu = false)
    {
        $items = [];
        foreach ($categories as $category) {
            // Para submenus, incluir todas as categorias. Para o menu principal, incluir apenas categorias de nível superior.
            if (!$isSubmenu && $category->parent_id !== null) {
                continue;
            }
    
            $item = [
                'id' => $category->id,
                'text' => $category->name,
                'url' => 'playlist/category/' . $category->id
            ];
    
            // Adicionar subcategorias, se houver
            if ($category->children->isNotEmpty()) {
                $item['submenu'] = $this->prepareMenuItems($category->children, true);
            }
    
            $items[] = $item;
        }
        return $items;
    }
}
