<?php 
    header('Content-Type: application/json');
    require_once 'MySqlHelper.php';

    $helper = new MySqlHelper();
    $helper->Connect();
    $Model = $helper->GetRows("SELECT * FROM schools");
    $helper->Disconnect();

    echo json_encode($Model);
?>