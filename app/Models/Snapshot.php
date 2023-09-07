<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Snapshot
 *
 * @property int $id
 * @property string $nome
 * @property string $videoId
 * @property float $shotTime
 * @property int $video_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Video $video
 * @method static \Database\Factories\SnapshotFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Snapshot newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Snapshot newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Snapshot query()
 * @mixin \Eloquent
 */
class Snapshot extends Model
{
    use HasFactory;


    public function video()
    {
        return $this->belongsTo('App\Models\video');
    }
}
