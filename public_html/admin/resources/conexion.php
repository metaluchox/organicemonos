<?php
	$servidor = "localhost";
	$user="w1081722_1";
	$pass="02muKEmedu";
	$BD="w1081722_organicemonos";
	/*$user="root";
	$pass="";
	$BD="organicemonos";*/
	$conexion = new mysqli($servidor,$user,$pass,$BD);
	if (mysqli_connect_errno()){
		echo "Error en la conexión: " . mysqli_connect_error();
	}
	mysqli_set_charset($conexion,"utf8");
?>