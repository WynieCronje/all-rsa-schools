

<?php 
    header('Content-Type: application/json');
    require_once 'MySqlHelper.php';


    $json = json_decode(file_get_contents('php://input'), true);

    $sqlHelper = new MySqlHelper();
    $sqlHelper->Connect();

    $now = $sqlHelper->Now();
    $id = $json["Id"];
    $status = $json["Status"];

    $sQuery = "UPDATE schools 
    SET Status='$status', Modified='$now'
    WHERE Id = $id";
    $Model = $sqlHelper->Query($sQuery);
    $sqlHelper->Disconnect();

    echo json_encode(['result' => 1]);
?>
