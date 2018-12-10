<?php 
	$resp = $_POST['resp'];
	$correo = $_POST['correo'];
	include ('conexion.php');
	$sql="SELECT * FROM usuario WHERE Correo ='".$correo."' AND Respuesta ='".$resp."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				echo "exito";
			}
		}else{
			echo "no";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>