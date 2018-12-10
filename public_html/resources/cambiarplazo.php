<?php 
	$plazo = $_POST['plazo'];
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="UPDATE organizacion SET plazo='".$plazo."' WHERE id='".$id."';";
	$resultado="";
	if($conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>