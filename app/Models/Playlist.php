<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Playlist
 *
 * @property int $id
 * @property int $category_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $title
 * @property string $playlist_id
 * @property string $description
 * @property string $thumbnail
 * @property string $published_at
 * @property string $kind
 * @property string $type
 * @property int $video_count
 * @property-read \App\Models\Category $category
 * @property-read \Kalnoy\Nestedset\Collection|\App\Models\Topic[] $topics
 * @property-read int|null $topics_count
 * @method static \Database\Factories\PlaylistFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Playlist newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Playlist newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Playlist query()
 * @mixin \Eloquent
 */
class Playlist extends Model
{
    protected $fillable = ['playlist_id', 'outros', 'atributos', 'aqui'];

    use HasFactory;

    public function topics()
    {
        return $this->hasMany('App\Models\Topic');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\category');
    }


}
