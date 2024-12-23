<?php

include "../conn.php";

$myfile = fopen("testfile.txt", "w");

try {

    $stmt = $conn->prepare('SELECT * FROM works');
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($res);

} catch (\Throwable $th) {
    fwrite($myfile, "error: " + $th + date("d/m/y") + "" + date("H:i:s"));
}
