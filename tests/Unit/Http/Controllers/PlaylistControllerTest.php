<?php

namespace Http\Controllers;

use App\Http\Controllers\PlaylistController;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use PHPUnit\Framework\TestCase;





class PlaylistControllerTest extends TestCase
{

    use DatabaseTransactions;


    public function testAddrange()
    {
        $varPlaylistController = new PlaylistController();
//        $result = $varPlaylistController->AddSearchPlaylist('PHPUnit', 25);
        self::assertTrue($varPlaylistController->teste());

    }

    public function testCreate()
    {
        self::assertTrue(true);
    }

    public function testAdditens()
    {
        self::assertTrue(true);
    }
}
