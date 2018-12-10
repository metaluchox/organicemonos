<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="SELECT * FROM organizacion WHERE id ='".$id."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$resultado=$resultado."".$row['id']."-^-".$row['nombre']."-^-".$row['tema']."-^-".$row['tipo']."-^-".$row['descripcion']."/^/";
			}
		}else{
			$resultado="No existe organizacion.";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>