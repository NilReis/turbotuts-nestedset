<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Marker
 *
 * @property int $id
 * @property float $time
 * @property string $label
 * @property int $video_id
 * @property int $playlist_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\MarkerFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Marker newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Marker newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Marker query()
 * @mixin \Eloquent
 */
class Marker extends Model
{
    use HasFactory;

           /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'time',
        'label',
        'video_id',
        'playlist_id'
    ];


    public function videos()
    {
        $this->hasMany('App\Models\video');
    }
}
