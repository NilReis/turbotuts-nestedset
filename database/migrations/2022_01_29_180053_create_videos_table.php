<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('topic_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('youtube_id', 11);
            $table->string('title', 255);
            $table->string('description',5000);
            $table->time('duration');
            $table->string('source_src',255);
            $table->string('source_type',45);
            $table->string('thumbnail_src',255);
            $table->string('thumbnail_media',45);
            $table->string('thumbnail_type',45);
            $table->string('channel_id',45);
            $table->dateTime('published_at');
            $table->foreignId('playlist_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
