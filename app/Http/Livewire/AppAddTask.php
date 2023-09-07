<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Task;


class AppAddTask extends Component
{
    public $title;

    public function render()
    {
        return view('livewire.app-add-task');
    }

    public function show($id)
    {



        //dd($this->tasks);
        //$this->emit('taskAdded');
        try {
            $this->emit('getTask', $id);
        } catch (\Throwable $th) {
            //throw $th;
        }
        //$this->emit('taskAdded');
    }

    public function addTask()
    {

        auth()->user()->tasks()->create([
            'title' => $this->title,
            'status' => false,
        ]);

        $this->title = "";

        $this->emit('taskAdded');
    }
}
