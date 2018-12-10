<?php 
	$id = $_POST['id'];
	$correo = $_POST['correo'];
	include ('conexion.php');
	$sql="UPDATE participantes SET rec='1' WHERE id='".$id."' AND Correo='".$correo."';";
	$resultado="55555";
	if($result=$conexion->query($sql)){
		$sql2="SELECT Reputacion FROM usuario WHERE Correo='".$correo."';";
		if($result2=$conexion->query($sql2)){
			if($result2->num_rows >0){
				while($row2 = $result2->fetch_array()){
					$rep=$row2['Reputacion']+1;
					$sql3="UPDATE usuario SET Reputacion='".$rep."' WHERE Correo='".$correo."';";
					if($result3=$conexion->query($sql3)){
						echo "exito";
					}
				}
			}
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>