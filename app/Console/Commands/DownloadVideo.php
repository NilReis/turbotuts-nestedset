<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\VideoController;

class DownloadVideo extends Command
{
    protected $signature = 'video:download {videoId}';
    protected $description = 'Download a video by its ID';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $videoId = $this->argument('videoId');
        $videoController = new VideoController();

        try {
            $videoController->downloadVideo($videoId);
            $this->info("Video with ID {$videoId} downloaded successfully.");
        } catch (\Exception $e) {
            $this->error("Failed to download video with ID {$videoId}. Error: " . $e->getMessage());
        }
    }
}
