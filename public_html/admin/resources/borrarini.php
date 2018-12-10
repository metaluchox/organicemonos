<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$sql="DELETE FROM comentario WHERE id = '".$id."';";
	$resultado="0";
	if($result=$conexion->query($sql)){
		$sql2="DELETE FROM participantes WHERE id = '".$id."';";
		if($result2=$conexion->query($sql2)){
			$sql="DELETE FROM comentarioadmin WHERE id = '".$id."';";
			if($result=$conexion->query($sql)){
				$sql="DELETE FROM organizacion WHERE id = '".$id."';";
				if($result=$conexion->query($sql)){
					echo "0";
				}else{
					echo "1";
				}
			}else{
				echo "1";
			}
		}else{
			echo "1";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>