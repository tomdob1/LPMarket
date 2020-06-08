<?php
$host = "localhost";
$username = "n0699098";
$password = "UKqBmK5D";
$database = "m_soft20171_n0699098";

$con = mysqli_connect($host, $username, $password, $database);
if(mysqli_connect_errno()){
	echo "Failed to connect to MySQL:".mysqli_connect_error();
}
else{
	echo "Success";
}
?>
