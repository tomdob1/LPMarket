
<!DOCTYPE html>
<html>
	<head>
		<title>Create Account</title>
		<link rel="stylesheet" type="text/css" href="css/mediarules.css"> <!--links to css-->
		<script type="text/javascript" src="js/form2.js"></script> <!-- links to js-->
	</head>
	<body> 
	
	<div class="wrapper">
		<div class="header">
	<a href="home.html"><img src="images/logo.png" alt="LP Market Logo" width="200" height="30"></a> <!--display lp market icon-->
	</div>
	
	<div class="menu" id="mobileMenu"> <!--display the css menu, if width is below 480 px display mobile menu code used from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp-->
		<a href="home.html" class="mobileHome">Home</a><!-- https://www.w3schools.com/css/css_navbar.asp Navigation bar -->
		<a href="product.html">Product Page</a>
		<a href="orderform.html">Order Form</a>
		<a href="account.html">Account</a>
		<a href="report.html">Report</a>
		<a href="javascript:void(0);" class="mobileIcon" onclick="mobileNavFunction()">&#9776;</a>
	</div>
	<?php 
		include "connect.php";
		$emailError = "";
		$firstNameError = "";
		$surnameError = "";
		$houseNoError = "";
		$postcodeError = "";
		$titleError = "";
		$passwordError = "";
		
		if (isset($_POST["submitButton"])) {
			
			
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
				$emailError = "Please fill in email";
			}
			else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
					$emailError = "Email is not valid";
			}
			else{
				$emailBool = true;
				
			}
			
			if (empty($_POST["firstname"])){
				$firstNameError = "Please fill in first name";
			}
			else if(!preg_match("/^[a-zA-Z ]*$/",$firstName)){
				$firstNameError = "Input letters into first name";
			}
			else{
				$firstNameBool = true;
				
			}
			
			if (empty($_POST["lastname"])){
				$surnameError = "Please fill in surname";
			}
			else if(!preg_match("/^[a-zA-Z ]*$/",$surname)){
				$surnameError = "Input letters into surname";
			}
			else{
				$surnameBool = true;
			
			}
			
			if (empty($_POST["address1"])){
				$houseNoError = "Please fill in house number";
			}
			else if(!is_numeric($houseNo)){ // https://stackoverflow.com/questions/7649752/php-is-numeric-or-preg-match-0-9-validation
					$houseNoError = "Input numbers for house number";
			}
			else{
				$houseNoBool = true;
				
			}
			
			if (empty($_POST["password1"])){
				$passwordError = "Please fill in password";
			}
			else if ($password != $password2){
				$passwordError = "Passwords do not match";
			}
			else{
				$passwordBool = true;
			}
			
			if (empty($_POST["postcode"])){
				$postcodeError = "Please fill in postcode";
			}
			else if(!preg_match("/^[0-9a-zA-Z]*$/",$postcode)){
				$postcodeError = "Input valid postcode";
			}
			else{
				$postcodeBool = true;
			}
			if (empty($_POST["title"])){
				$titleError = "Please select a title";
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
			
			
		}
	?>
		
		
		
		
	<div class="content"> 
		<h1>Register</h1>
		
		
		<form name="details2" action="<?=$_SERVER['PHP_SELF'];?>" id="personalInfoForm" method="post"> <!--Creates a drop down menu for title with specific options -->
			<p><label for="title">Title*<br></label><select name="title">
				<option value="Mr">Mr</option>
				<option value="Mrs">Mrs</option>
				<option value="Miss">Miss</option>
				<option value="Dr">Dr</option>
				<option value="Sir">Sir</option>
			</select><br>
			<span class="formError"><?php echo $titleError;?>
			First Name:*<br> <!-- Inputs for personal information as text. * are essential inputs in order to submit-->
			<input name="firstname" type="text" id="firstName"/>
			<span class="formError"><?php echo $firstNameError;?><br>
			Last Name:*<br>
			<input name="lastname" type="text" id="lastName"/>
			<span class="formError"><?php echo $surnameError;?><br>
			Email:*<br>
			<input name="email"    type="text" id="email"/>
			<span class="formError"><?php echo $emailError;?><br>
			House Number:*<br>
			<input name="address1" type="text" id="address1"/>
			<span class="formError"><?php echo $houseNoError;?><br>
			Postcode:*<br>
			<input name="postcode" type="text" id="postcode"/>
			<span class="formError"><?php echo $postcodeError;?><br>
			<h1>Your password</h1>
			Password:*<br>
			<input name="password1" type="text" id="password1"/>
			<span class="formError"><?php echo $passwordError;?><br>
			Confirm Password:*<br>
			<input name="password2" type="text" id="password2"/><br><br><br>
			<input type="submit" name="submitButton">
		</form>
		<?php
		
		?>
		
	</div>
	
	
	
	
	<div class="footer"> <!--footer-->
	
	
	
	&copy; 2018 Tomasz Dobrowolski All Rights Reserved  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Download the LP Market APP &#8594;&nbsp;<a href="App/LPMarket.apk" download><img src="images/logo.jpg" style=" width: 25px;"></a>
	
	</div>
	</div>
	
	
	</body>
</html>