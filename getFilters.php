<?php 
    ini_set('memory_limit', '3000M'); 
    header('Content-Type: application/json');
    require_once 'MySqlHelper.php';
    
    $helper = new MySqlHelper();
    $helper->Connect();
    $Provinces = $helper->GetRows("SELECT distinct Province FROM schools ORDER BY Province");
    $Phases = $helper->GetRows("SELECT distinct Phase FROM schools ORDER BY Phase");
    $Sectors = $helper->GetRows("SELECT distinct Sector FROM schools ORDER BY Sector");
    $Allocations = $helper->GetRows("SELECT distinct Allocation FROM schools ORDER BY Allocation");
    $Districts = $helper->GetRows("SELECT distinct EIDistrict FROM schools ORDER BY EIDistrict");
    $DMunNames = $helper->GetRows("SELECT distinct DMunName FROM schools ORDER BY DMunName");
    $LMunNames = $helper->GetRows("SELECT distinct LMunName FROM schools ORDER BY LMunName");
    $Regions = $helper->GetRows("SELECT distinct EIRegion FROM schools ORDER BY EIRegion");
    $Suburbs = $helper->GetRows("SELECT distinct Suburb FROM schools ORDER BY Suburb");
    $TownCitys = $helper->GetRows("SELECT distinct Town_City FROM schools ORDER BY Town_City");
    $UrbanRurals = $helper->GetRows("SELECT distinct Urban_Rural FROM schools ORDER BY Urban_Rural");
    $NoFeeSchools = $helper->GetRows("SELECT distinct NoFeeSchool FROM schools ORDER BY NoFeeSchool");
    $helper->Disconnect();
    
    $filters = new Fitlers();
    
    $filters->Provinces = [];

    foreach ($Provinces as $item) {
        $filters->Provinces[] = $item["Province"];
    }
    foreach ($Phases as $item) {
        $filters->Phases[] = $item["Phase"];
    }
    foreach ($Sectors as $item) {
        $filters->Sectors[] = $item["Sector"];
    }
    foreach ($Allocations as $item) {
        $filters->Allocations[] = $item["Allocation"];
    }
    foreach ($Districts as $item) {
        $filters->Districts[] = $item["EIDistrict"];
    } 
    foreach ($DMunNames as $item) {
        $filters->DMunNames[] = $item["DMunName"];
    }
    foreach ($LMunNames as $item) {
        $filters->LMunNames[] = $item["LMunName"];
    }
    foreach ($Regions as $item) {
        $filters->Regions[] = $item["EIRegion"];
    }
    foreach ($Suburbs as $item) {
        $filters->Suburbs[] = $item["Suburb"];
    }
    foreach ($TownCitys as $item) {
        $filters->TownCitys[] = $item["Town_City"];
    }
    foreach ($UrbanRurals as $item) {
        $filters->UrbanRurals[] = $item["Urban_Rural"];
    }
   foreach ($NoFeeSchools as $item) {
        $filters->NoFeeSchools[] = $item["NoFeeSchool"];
    }
    echo json_encode($filters);

    class Fitlers{
        public  $Provinces;
        public  $Phases;
        public  $Sectors;
        public  $NoFeeSchools;
        public  $Allocations;//Allocation
        public  $Districts;//District
        public  $DMunNames;//DMunName
        public  $LMunNames;//LMunName
        public  $Regions;//Region
        public  $Suburbs;//Suburb
        public  $TownCitys;//Town_City
        public $UrbanRurals;//Urban_Rural
    }

?>