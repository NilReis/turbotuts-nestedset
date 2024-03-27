<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsQueuedForDownloadToVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('videos', function (Blueprint $table) {
            // Añadir el campo booleano 'is_queued_for_download' con un valor por defecto de false
            $table->boolean('is_queued_for_download')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('videos', function (Blueprint $table) {
            // Eliminar la columna si la migración se revierte
            $table->dropColumn('is_queued_for_download');
        });
    }
}
