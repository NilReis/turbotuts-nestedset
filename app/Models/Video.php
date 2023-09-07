<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Video
 *
 * @property int $id
 * @property string $youtube_id
 * @property string $title
 * @property string $description
 * @property string $duration
 * @property string $source_src
 * @property string $source_type
 * @property string $thumbnail_src
 * @property string $thumbnail_media
 * @property string $thumbnail_type
 * @property string $channel_id
 * @property string $published_at
 * @property int $playlist_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Marker|null $marker
 * @property-read \App\Models\Playlist $playlist
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Snapshot[] $snapshot
 * @property-read int|null $snapshot_count
 * @method static \Database\Factories\VideoFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Video newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Video newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Video query()
 * @mixin \Eloquent
 */
class Video extends Model
{
    use HasFactory;

    public function playlist()
    {
        return $this->belongsTo('App\Models\playlist');
    }

    public function chapters()
    {
        return $this->hasMany('App\Models\marker');
    }

    public function snapshot()
    {
        return $this->HasMany('App\Models\snapshot');
    }
}
