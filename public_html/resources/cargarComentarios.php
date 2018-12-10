<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="SELECT * FROM comentario WHERE id ='".$id."'  order BY fecha DESC;";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$sql2="SELECT Nombre,Apellido,Nick FROM usuario WHERE Correo ='".$row['Correo']."';";
				if($result2=$conexion->query($sql2)){
					if($result2->num_rows >0){
						while($row2 = $result2->fetch_array()){
							$resultado=$resultado."".$row2['Nombre']."-^-".$row2['Apellido']."-^-".$row['fecha']."-^-".$row['comentario']."-^-".$row['ide']."-^-".$row2['Nick']."/^/";
						}
					}else{
					}
				}else{
					echo "1";
				}
			}
		}else{
			$resultado="No existe organizacion.";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>