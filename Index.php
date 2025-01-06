<!DOCTYPE html>
<html lang="en">

<?php
isset($_SESSION) ?: session_start();
isset($_GET['page']) ? $page = $_GET['page'] : $page = 'home';
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "includes/index/links-index.inc.php" ?>
    <title>Nataro Ajaouin</title>
</head>

<body class="bg-[#314326]">
    <header class="w-[6%] z-10 sticky top-0" id="header">
        <?php include "includes/navbar.inc.php" ?>
    </header>
    <main class="flex flex-col justify-around" id="main">
        <?php
            include "includes/home.inc.php";
            include "includes/programs.inc.php";
            include "includes/experience.inc.php";
            include "includes/contact.inc.php";
        ?>
    </main>
</body>

</html>