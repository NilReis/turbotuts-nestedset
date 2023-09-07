<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Video;

class AppTasks extends Component
{

    protected $listeners = ['taskAdded' => '$refresh', 'getTask' => 'getTask'];
    public $tasks;
    public $totalTasks;
    public $take;


    public function getTask($id)
    {
        $this->take = $id;
    }



    public function render()
    {

        try {
            if (isset($this->tasks)) {
                $this->tasks = Video::take($this->take)->get();
                $this->totalTasks = auth()->user()->tasks()->count();
                //dd('fsdaf');
            }
        } catch (\Throwable $th) {
            //throw $th;
        }

        //dd($this->tasks);

        return view('livewire.app-tasks', [
            'totalTasks' => $this->totalTasks,
            'tasks' => $this->tasks
        ]);
    }
}
