
<?php
		include "connect.php";
		$sql = "SELECT * FROM albums";
		$result = mysqli_query($con, $sql);
			while ($row=mysqli_fetch_assoc($result)){ //fetch result
				echo "Title:".$row["Title"].
					 "Artist:".$row["Artist"];
					 
			}
		?>