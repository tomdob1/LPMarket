<?php 
	include "connect.php";
	
	
	$emailBool = true;
	$firstNameBool = false;
	$surnameBool = false;
	$houseNoBool = false;
	$passwordBool = false;
	$postcodeBool = false;
	$titleBool = false;
	
	
	
	if(isset($_POST["email"])){
		$email = $_POST["email"];
	}
	if(isset($_POST["firstname"])){
		$firstName = $_POST["firstname"];
	}
	if(isset($_POST["lastname"])){
		$surname = $_POST["lastname"];
	}
	if(isset($_POST["address1"])){
		$houseNo = $_POST["address1"];
	}
	if(isset($_POST["password1"])){
		$password = $_POST["password1"];
	}
	if(isset($_POST["password2"])){
		$password2 = $_POST["password2"];
	}
	if(isset($_POST["postcode"])){
		$postcode = $_POST["postcode"];
	}
	if(isset($_POST["title"])){
		$title = $_POST["title"];
	}
	
	$sql = "INSERT INTO accounts (Email, First_name, Surname, House_no, Password, Postcode, Title) VALUES ('$email', '$firstName', '$surname', '$houseNo', '$password', '$postcode', '$title')";
	
	if (empty($_POST["email"])){
		//$emailError = "Please fill in email";
	}
	else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
			//$emailError = "Email is not valid";
	}
	else{
		$emailBool = true;
	}
	
	if (empty($_POST["firstname"])){
		//$firstNameError = "Please fill in first name";
	}
	else if(!preg_match("/^[a-zA-Z ]*$/",$firstName)){
			//$firstNameError = "Input letters into first name";
	}
	else{
		$firstNameBool = true;
	}
	
	if (empty($_POST["lastname"])){
		$surnameError = "Please fill in surname";
	}
	else if(!preg_match("/^[a-zA-Z ]*$/",$surname)){
		//	$surnameError = "Input letters into surname";
	}
	else{
		$surnameBool = true;
	}
	
	if (empty($_POST["address1"])){
		//$houseNoError = "Please fill in house number";
	}
	else if(!is_numeric($houseNo)){ // https://stackoverflow.com/questions/7649752/php-is-numeric-or-preg-match-0-9-validation
			//$houseNoError = "Input numbers for house number";
	}
	else{
		$houseNoBool = true;
	}
	
	if (empty($_POST["password1"])){
		//$passwordError = "Please fill in password";
	}
	else if ($password != $password2){
		//$passwordError = "Passwords do not match";
	}
	else{
		$passwordBool = true;
	}
	
	if (empty($_POST["postcode"])){
		//$postcodeError = "Please fill in postcode";
	}
	else if(!preg_match("/^[0-9a-zA-Z]*$/",$postcode)){
			//$postcodeError = "Input valid postcode";
	}
	else{
		$postcodeBool = true;
	}
	if (empty($_POST["title"])){
		//$titleError = "Please select a title";
	}
	else{
		$titleBool = true;
	}
	
	if ($emailBool == true and $firstNameBool == true and $surnameBool == true and $houseNoBool == true and $passwordBool == true and $postcodeBool == true and $titleBool == true){
		if(mysqli_query($con,$sql)){
			header("Location: home.html");
		}
		else{
			echo "Error: ".mysqli_error($con);
		}
	}
	else if ($emailBool !={ 
		header("Location: createaccount.php");
		
	}
	
	
	