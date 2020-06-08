<?php 
include "connect.php";
$sql = "SELECT * FROM albums";
$result = mysqli_query($con, $sql);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Products</title>
		<link rel="stylesheet" type="text/css" href="css/mediarules.css">
		<script type="text/javascript" src="js/form.js"></script>
	</head>
	
	<body>
	
	<div class="wrapper">
		<div class="header">
			<a href="home.html"><img src="images/logo.png" alt="LP Market Logo" width="200" height="30"></a>
		</div>
	
	<div class="menu" id="mobileMenu">  <!--display the css menu, if width is below 480 px display mobile menu code used from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp-->
		<a href="home.html" class="mobileHome">Home</a><!-- https://www.w3schools.com/css/css_navbar.asp Navigation bar -->
		<a href="product.html">Product Page</a>
		<a href="orderform.html">Order Form</a>
		<a href="product.php">Account</a>
		<a href="report.html">Report</a>
		<a href="javascript:void(0);" class="mobileIcon" onclick="mobileNavFunction()">&#9776;</a>
	</div>
	
	
	<div class="content">
		<table>
			<tr>
				<th>Title</th>
				<th>Artist</th>
				<th>More Info</th>
			</tr>
		<?php
			while ($row=mysqli_fetch_assoc($result)){ //fetch result
				echo "<tr><td>".$row["Title"].
					 "</td><td>".$row["Artist"].
					 "</td><td><a href=details.php?ID=".$row["ID"].">link</a></td></tr>";
			}
		?>
		</table>
		
	</div>
	
	<br>
	<br>
	
	<div class="footer"> <!--footer-->
	
	
	
	&copy; 2018 Tomasz Dobrowolski All Rights Reserved   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Download the LP Market APP &#8594;&nbsp;<a href="App/LPMarket.apk" download><img src="images/logo.jpg" style=" width: 25px;"></a>
	
	</div>
	</div>
	
	
	</body>
</html>
