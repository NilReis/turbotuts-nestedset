<?php

namespace App\Models;

use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\Topic
 *
 * @property int $id
 * @property string $topic_name
 * @property int $_lft
 * @property int $_rgt
 * @property int|null $parent_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Kalnoy\Nestedset\Collection|Topic[] $children
 * @property-read int|null $children_count
 * @property-read Topic|null $parent
 * @property-read Topic|null $topic
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Video[] $videos
 * @property-read int|null $videos_count
 * @method static \Kalnoy\Nestedset\Collection|static[] all($columns = ['*'])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic ancestorsAndSelf($id, array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic ancestorsOf($id, array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic applyNestedSetScope(?string $table = null)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic countErrors()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic d()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic defaultOrder(string $dir = 'asc')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic descendantsAndSelf($id, array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic descendantsOf($id, array $columns = [], $andSelf = false)
 * @method static \Database\Factories\TopicFactory factory(...$parameters)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic fixSubtree($root)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic fixTree($root = null)
 * @method static \Kalnoy\Nestedset\Collection|static[] get($columns = ['*'])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic getNodeData($id, $required = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic getPlainNodeData($id, $required = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic getTotalErrors()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic hasChildren()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic hasParent()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic isBroken()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic leaves(array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic makeGap(int $cut, int $height)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic moveNode($key, $position)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic newModelQuery()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic newQuery()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic orWhereAncestorOf(bool $id, bool $andSelf = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic orWhereDescendantOf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic orWhereNodeBetween($values)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic orWhereNotDescendantOf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic query()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic rebuildSubtree($root, array $data, $delete = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic rebuildTree(array $data, $delete = false, $root = null)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic reversed()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic root(array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereAncestorOf($id, $andSelf = false, $boolean = 'and')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereAncestorOrSelf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereDescendantOf($id, $boolean = 'and', $not = false, $andSelf = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereDescendantOrSelf(string $id, string $boolean = 'and', string $not = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereIsAfter($id, $boolean = 'and')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereIsBefore($id, $boolean = 'and')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereIsLeaf()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereIsRoot()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereNodeBetween($values, $boolean = 'and', $not = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic whereNotDescendantOf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic withDepth(string $as = 'depth')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Topic withoutRoot()
 * @mixin \Eloquent
 */
class Topic extends Model
{
    use HasFactory;
    use NodeTrait;

       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'topic_name',
        'playlist_id',
        'position'
    ];


    public function videos()
    {
        return $this->hasMany('App\Models\Video');
    }

    public function topic()
    {
        return $this->belongsTo('App\Models\Topic');
    }
}
