<?php
if(isset($_POST["submit"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

    require_once 'dbh.inc.php';
    require_once 'function.inc.php';
    

    if (emptyInputLogin($email, $password) !== false ) {
        header("location: ../login.php?error=emptyInput");
        exit();
    }

    loginUser($conn, $email, $password);
}
    else {
        header("location: ../login.php");
        exit();
    }