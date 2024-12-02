<!DOCTYPE html>
<html lang="en">

<?php
    isset($_SESSION) ? : session_start();
    isset($_GET['page']) ? $page = $_GET['page'] : $page = 'home';
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style/style.css">
    <title>Nataro Ajaouin</title>
</head>

<body>
    <header>
        <?php include("includes/navbar.inc.php") ?>
    </header>
    <main>
        <?php include("includes/test.inc.php") ?>
    </main>
    <footer>
        <?php include("includes/footer.inc.php") ?>
    </footer>
</body>

</html>