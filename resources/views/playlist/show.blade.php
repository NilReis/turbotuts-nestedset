@extends('layouts.app')

@section('title', 'Playlist')

@livewireStyles

<style>
        .video-container {
                width: 100%;
                max-height: 700px;
                /* Atualizado para 700px */
                overflow-y: auto;
        }
</style>

@section('content')
<div class="row">
        <!-- Área de Exibição de Vídeos -->
        <div class="col-md-9" style="padding-right: 0;">
                <div id="player"></div>
                <form id="addChapterForm">
                        <div class="form-group row">
                                <div class="col-md-6">
                                        <label for="chapterDescription">Descrição do Capítulo</label>
                                        <input type="text" class="form-control" id="chapterDescription" name="chapterDescription" required>
                                </div>
                                <div class="col-md-6">
                                        <button type="button" onclick="addChapter()" class="btn btn-primary">Adicionar Capítulo</button>

                                </div>
                        </div>



                </form>
        </div>
        <!-- Lista de Vídeos em Acordeão -->
        <div class="col-md-3" style="padding-left: 0;">
                @livewire('video-playlist', ['playlistId' => $playlist->id])
        </div>
</div>
@endsection
@livewireScripts