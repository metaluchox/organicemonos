<?php 
	$id = $_POST['id'];
	$correo = $_POST['correo'];
	$comentario = $_POST['comentario'];

	include ('conexion.php');
	$sql="INSERT INTO comentario(id,Correo,comentario) VALUES ('".$id."','".$correo."','".$comentario."');";
	$resultado="";
	if($result=$conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>