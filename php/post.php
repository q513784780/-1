<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_GET["usname"];
	$pwd = $_GET["uspwd"];
	
	$conn = mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("user");
	}
	
	$result = mysql_query("select * from number where username = '$name'",$conn);
	
	if(mysql_num_rows($result) == 1){
		echo "用户名已存在";
	}else{
		mysql_query("insert into number values(1,'$name','$pwd')",$conn);
		echo "注册成功";
	}
	
	mysql_close($conn);
?>