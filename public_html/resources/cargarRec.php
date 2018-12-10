<?php 
	$id = $_POST['id'];
	$correo = $_POST['correo'];
	include ('conexion.php');
	$sql="SELECT * FROM participantes WHERE id ='".$id."' AND Correo='".$correo."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				if($row['rec']==0){
					$resultado="mostrar";
				}else{
					$resultado="no mostrar";
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