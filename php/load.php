
	<?php
		header("Content-type:text/html;charset=utf-8");
		
		$name = $_GET["username"];
		
		$conn = mysql_connect("localhost","root","root");
		if($conn){
			mysql_select_db("user");
		}
		
		$resule = mysql_query("select * from number where userName = '$name'",$conn);
		if(mysql_num_rows($resule) == 1){
			echo 1;
		}else{
			echo 0;
		}
		
		mysql_close($conn);
	?>
