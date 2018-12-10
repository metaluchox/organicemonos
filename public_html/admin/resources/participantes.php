<?php 
	$id = $_POST['id'];;
	include ('conexion.php');
	$sql="SELECT * FROM participantes WHERE id ='".$id."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$sql1="SELECT * FROM usuario WHERE Correo='".$row['Correo']."';";
				if($result1=$conexion->query($sql1)){
					if($result1->num_rows >0){
						while($row1 = $result1->fetch_array()){
							$resultado=$resultado.$row1['Nombre']."%".$row1['Apellido']."%".$row1['Correo']."%".$row1['rut']."/";
						}
					}
				}
			}
		}else{
			echo "1";
		}
	}else{
		echo "1";
	}
	echo "$resultado";