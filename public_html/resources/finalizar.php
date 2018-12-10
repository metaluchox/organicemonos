<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="UPDATE organizacion SET terminado='1' WHERE id='".$id."';";
	$resultado="";
	if($conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>