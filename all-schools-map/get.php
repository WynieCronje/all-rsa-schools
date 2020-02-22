<?php 
    ini_set('memory_limit', '3000M'); 
    header('Content-Type: application/json');
    require_once 'MySqlHelper.php';
    
    $helper = new MySqlHelper();
    $helper->Connect();
    $Model = $helper->GetRows("SELECT Province,
    Institution_Name as SchoolName,
    Sector,
    E_Mail as Email,
    cellno as Cell,
    Telephone as Tel,
    Phase,
    GIS_Longitude as Longitude,
    GIS_Latitude as Latitude,
    DMunName,
    LMunName,
    EIRegion as Region,
    EIDistrict as District,
    Suburb,
    Town_City,
    NoFeeSchool,
    Allocation,
    Urban_Rural FROM schools");
    $helper->Disconnect();

    ob_start("ob_gzhandler");
    echo json_encode($Model);
    ob_end_flush();
?>