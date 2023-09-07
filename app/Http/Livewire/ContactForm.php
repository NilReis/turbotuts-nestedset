<?php

namespace App\Http\Livewire;

use Livewire\Component;

class ContactForm extends Component
{

    public $name = '';
    public $email = '';
    public $message = '';

    public function render()
    {
        return view('livewire.contact-form');
    }

    public function submit()
    {
        // Validação dos campos de formulário aqui...

        // Enviar o e-mail aqui...

        //dd($this->name);

        session()->flash('message', 'Obrigado pelo seu contato!');
    }
}
