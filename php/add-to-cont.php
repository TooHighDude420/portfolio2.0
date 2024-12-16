<?php
include "conn.php";

$e_mail = $_POST['e_mail'];
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$message = $_POST['message'];

try {
    $stmt = $conn -> prepare('INSERT INTO contact (e_mail, f_name, l_name, message) VALUES (:e_mail, :f_name, :l_name, :u_message)');
    $stmt->bindParam("e_mail", $e_mail, PDO::PARAM_STR);
    $stmt->bindParam("f_name", $f_name, PDO::PARAM_STR);
    $stmt->bindParam("l_name", $l_name, PDO::PARAM_STR);
    $stmt->bindParam("u_message", $message, PDO::PARAM_STR);
    $stmt->execute();
    header('Location:http://localhost/portfolio2.0/index.php');
} catch (PDOException $e) {
    print "please email the error to me at: nataro112@gmail.com";
    print "Error: ";
    print "<br>";
    print $e;
    print "<br>";
    print "<button onclick='../index.php'>back</button>";
}
