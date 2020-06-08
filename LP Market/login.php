<?php 
include "connect.php";

if(isset($_POST["email"])){
	$email = $_POST["email"];
}

if(isset($_POST["password1"])){
	$password = $_POST["password1"];
}

$sql = "SELECT * FROM accounts WHERE Email = '$email' and Password = '$password'";
$result = mysqli_query($con, $sql);

if(mysqli_num_rows($result) == 1){
	header("Location: home.html");
}
else{
	header("Location: loginForm.php");
}
?>