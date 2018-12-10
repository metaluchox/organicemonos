<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$resultado="0";
	$sql="DELETE FROM comentario WHERE ide = '".$id."';";
	if($result=$conexion->query($sql)){
		echo "0";
	}else{
		echo "1";
	}
	echo "$resultado";
?>