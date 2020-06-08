<?php
include "connect.php";

$id = $_GET["ID"];
$sql = "SELECT * FROM albums WHERE ID = '$id'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

header("Content-type:".$row["imageType_stk"]);
echo $row["imageType_stk"];
?>

