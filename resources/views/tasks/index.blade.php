@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    {{-- <h1><i class="{{$menu->icon}}"></i> {{$menu->text}}</h1> --}}

    @livewireStyles()

@stop



@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4 p-4">
            {{-- @livewire('app-add-task') --}}
            @livewire('playlist-result', ['category' => 3])
        </div>

        <div class="col-md-8 p-4">

            {{-- @livewire('app-tasks') --}}
            @livewire('show-videos')


        </div>
    </div>
</div>

@stop

@section('css')


@stop

@section('js')
    @livewireScripts()



@stop
