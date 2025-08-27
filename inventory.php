<?php
session_start();
if (!isset($_SESSION["authUser"])) {
    header("Location: index.html");
    exit;
}
?>