<?php 
	$pswd = $_POST['pswd'];
	$correo = $_POST['correo'];
	include ('conexion.php');
	$sql="UPDATE usuario SET Contrasena='".$pswd."' WHERE Correo='".$correo."';";
	$resultado="";
	if($conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>