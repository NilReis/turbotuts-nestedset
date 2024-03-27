<?php

// use App\Http\Controllers\PlaylistController;
// use App\Models\Playlist;

// $playlistController = new PlaylistController;
// $playlistController->AddPlaylist("PLx3jFshHO0DlaUxe3Feel0KZZ9YjLsuz-", 15);

// echo 'fim';

$user = new User;
$user->name = 'Nil Reis';
$user->email = 'nil.f.reis@gmail.com';
$user->password = Hash::make('senha');
$user->status = 'actived'; // Escolha um dos valores: 'actived', 'inactived', 'pre_registred'
$user->gender = 'male'; // Ou 'female'
$user->profile = 'user'; // Ou 'administrator'
$user->save();