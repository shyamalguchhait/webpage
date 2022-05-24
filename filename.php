<?php 
    $path = './src/assets/lightbox/0';
    $file = scandir($path);
    unset($file[0]); unset($file[1]); 
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($file);
?>