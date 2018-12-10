<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="SELECT Correo FROM organizacion WHERE id ='".$id."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$sql2="SELECT Nick FROM usuario WHERE Correo ='".$row['Correo']."';";
				if($result2=$conexion->query($sql2)){
					if($result2->num_rows >0){
						while($row2 = $result2->fetch_array()){
							$resultado=$row2['Nick'];
						}
					}
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