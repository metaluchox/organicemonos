<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="SELECT comentario,fecha FROM comentarioadmin WHERE id ='".$id."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$resultado=$resultado."".$row['comentario']."-^-".$row['fecha']."/^/";
			}
		}else{
			$resultado="No existe organizacion.";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>