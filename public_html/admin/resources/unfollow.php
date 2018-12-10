<?php 
	$id = $_POST['id'];
	$correo = $_POST['correo'];
	include ('conexion.php');
	$sql="delete from participantes where id='".$id."' and Correo='".$correo."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		$sql2="SELECT * FROM organizacion WHERE id='".$id."'";
		if($result2=$conexion->query($sql2)){
			if($result2->num_rows >0){
				while($row2= $result2->fetch_array()){
					$cant=$row2['participantes']-1;
					$sql3="UPDATE organizacion SET participantes='".$cant."' WHERE id='".$id."'";
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