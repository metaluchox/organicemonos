<?php 
	$id = $_POST['id'];
	$comentario = $_POST['comentario'];
	include ('conexion.php');
	$sql="INSERT INTO comentarioadmin(id,comentario) VALUES ('".$id."','".$comentario."');";
	$resultado="";
	if($result=$conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>