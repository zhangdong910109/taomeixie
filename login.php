<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$connection = mysql_connect("localhost", "root", "");
	mysql_select_db("taomeixie");
	$sql = "SELECT *FROM users WHERE (username='$username'OR email='$username') AND password='$password'";
	$result = mysql_query($sql,$connection);
	$row = mysql_fetch_array($result,MYSQL_ASSOC);
	if(!$row){
		echo "用户名或者密码错误...";
	}
	else{
		echo "登录成功<br>";
		echo json_encode($row);
	}
	mysql_close($connection);
?>