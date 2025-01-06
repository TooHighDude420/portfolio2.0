<?php

$host = "localhost";
$username = "u195361p354045_admin";
$password = "Wacht@Database112";
$dbname = "u195361p354045_portfolio";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}