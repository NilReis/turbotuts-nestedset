@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    {{-- <h1><i class="{{$menu->icon}}"></i> {{$menu->text}}</h1> --}}
@stop

@section('content')
    {{-- <h2>Você está no menu "{{$menu->text}}".</h2> --}}
@stop

@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
<script>
    console.log('Hi!');
</script>
@stop
