<?php 
	$correo = $_POST['correo'];
	include ('conexion.php');
	$sql="SELECT Pregunta FROM usuario WHERE Correo ='".$correo."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$resultado=$resultado.$row['Pregunta'];
			}
		}else{
			$resultado="No existe correo.";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>