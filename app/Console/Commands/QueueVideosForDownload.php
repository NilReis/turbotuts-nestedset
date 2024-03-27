<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Video;
use App\Jobs\DownloadVideoJob;

class QueueVideosForDownload extends Command
{
    protected $signature = 'videos:queue-download';
    protected $description = 'Coloca en la cola los videos marcados para descarga';

    public function handle()
    {

        $videos = Video::where('is_queued_for_download', true)->get();

        foreach ($videos as $video) {
            DownloadVideoJob::dispatch($video->youtube_id);
            $this->info("Video {$video->youtube_id} colocado en la cola para descarga.");
        }
    }

}
