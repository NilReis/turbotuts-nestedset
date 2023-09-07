<?php


//Tinker away!

// use App\Http\Controllers\PlaylistController;

// $tete = new PlaylistController;

// $tete->callReadFile();


// Read the JSON file
$json = file_get_contents('C:\laragon\www\turbotuts\.tinkerun\teste.json');

// Decode the JSON file
$json_data = json_decode($json,true);

// Display data
print_r($json_data);

?>
