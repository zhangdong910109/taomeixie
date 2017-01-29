<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$name = $_POST["name"];
	$qq = $_POST["qq"];
	$weixin = $_POST["weixin"];
	$url = $_POST["url"];

	$connection = mysql_connect("localhost", "root", "");
	mysql_select_db("taomeixie",$connection);
	$sql = "INSERT INTO users VALUES(NULL,'$username','$password','$email'
	,'$phone','$name','$weixin','$qq','$url')";
	$result = mysql_query($sql);
	if(!$result){
		die("用户名已存在");
	}
	else{
		echo "注册成功，淘美鞋欢迎您...";
	}
	mysql_close($connection);
?>