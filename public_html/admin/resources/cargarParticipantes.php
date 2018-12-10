<?php 
	$id = $_POST['id'];;
	$correo=$_POST['correo'];;
	include ('conexion.php');
	$sql="SELECT Correo FROM participantes WHERE id ='".$id."';";
	$resultado="";
	$flag=0;
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			$resultado=$result->num_rows;
			while($row = $result->fetch_array()){
				if($row['Correo']== $correo){
					$flag=1;
					break;
				}
			}
			if($flag==0){
				$resultado=$resultado."-Seguir";
			}else{
				$resultado=$resultado."-Siguiendo";
			}
		}else{
			$resultado="No existen participantes.";
		}
	}else{
		echo "ew";
	}
	echo "$resultado";
?>