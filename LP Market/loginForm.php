<!DOCTYPE html>
<html>
	<head>
		<title>Account</title>
		<link rel="stylesheet" type="text/css" href="css/mediarules.css"> <!--links to css-->
		<script></script> <!-- links to js-->
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

	
	
	<div class="content"> 
		<h1>Login</h1>
		<form name="login" action="login.php" id="personalInfoForm" method="post"> <!--Creates a drop down menu for title with specific options -->
			Email:*<br>
			<input name="email"    type="text" id="email"/><br>
		<!--	<span class="formError"><?php echo $emailError;?><br> --> 
			Password:*<br>
			<input name="password1" type="text" id="password1"/>
		<!--	<span class="formError"><?php echo $passwordError;?><br> -->
			<input type="submit">
		</form>
		
	</div>
	
	
	
	
	<div class="footer"> <!--footer-->
	
	
	
	&copy; 2018 Tomasz Dobrowolski All Rights Reserved  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Download the LP Market APP &#8594;&nbsp;<a href="App/LPMarket.apk" download><img src="images/logo.jpg" style=" width: 25px;"></a>
	
	</div>
	</div>
	
	
	</body>
</html>	
	