<?php 
	$id = $_POST['id'];
	include ('conexion.php');
	$resultado="0";
	$sqll="SELECT Correo FROM organizacion WHERE id='".$id."';";
	if($resultt=$conexion->query($sqll)){
		if($resultt->num_rows >0){
			while($row = $resultt->fetch_array()){
				$correo=$row['Correo'];
					$sql="DELETE FROM comentario WHERE Correo = '".$correo."';";
					if($result=$conexion->query($sql)){
						$sql2="DELETE FROM participantes WHERE Correo = '".$correo."';";
						if($result2=$conexion->query($sql2)){
							$sql="DELETE FROM organizacion WHERE Correo = '".$correo."';";
							if($result=$conexion->query($sql)){
								$sql="DELETE FROM usuario WHERE Correo = '".$correo."';";
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
			}
		}
	}
	

	echo "$resultado";
?>