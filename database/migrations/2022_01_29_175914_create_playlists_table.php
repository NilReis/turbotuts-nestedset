<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaylistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playlists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained();
            $table->timestamps();
            $table->string('title', 255);
            $table->string('playlist_id',34);
            $table->string('description',3000);
            $table->string('thumbnail',255);
            $table->dateTime('published_at');
            $table->string('kind',45);
            $table->string('type',45);
            $table->integer('video_count');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('playlists');
    }
}
