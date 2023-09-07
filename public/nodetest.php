<?php

exec("node node-ytsr.js --token=Laravel --mesage=Playlist", $output);
echo json_encode ($output);
