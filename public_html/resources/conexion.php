<?php
 $array = file('../config/conexion.properties');
 $properties = array();
 foreach ($array as $index => $value){
	 $properties[$index] = trim($value);
 }
	
$servidor =$properties[0];
$user	=$properties[1];
$pass	=$properties[2];
$BD		=$properties[3];

	$conexion = new mysqli($servidor,$user,$pass,$BD);
	if (mysqli_connect_errno()){
		echo "Error en la conexión: " . mysqli_connect_error();
	}
	mysqli_set_charset($conexion,"utf8");
?>