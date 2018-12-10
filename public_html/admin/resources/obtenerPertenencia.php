<?php 
	$correo=$_POST['correo'];
	include ('conexion.php');
	$sql="SELECT id,Correo FROM participantes WHERE Correo ='".$correo."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$sql2="SELECT * FROM organizacion WHERE id='".$row['id']."' AND terminado='0';";
				if($result2=$conexion->query($sql2)){
					if($result2->num_rows >0){
						while($row2 = $result2->fetch_array()){
							$resultado=$resultado."".$row2['id']."%".$row2['nombre']."%".$row2['tema']."%".$row2['tipo']."%".$row2['participantes']."%".$row2['plazo']."%";
							$sql3="SELECT Nick,Reputacion FROM usuario WHERE Correo = '".$row['Correo']."';";
							if($result3=$conexion->query($sql3)){
								if($result3->num_rows >0){
									while($row3 = $result3->fetch_array()){
										$resultado=$resultado."".$row3['Nick']."%".$row3['Reputacion']."/";
									}
								}
							}	
						}
					}
				}else{
					echo "ew";
				}
			}
		}else{
			$resultado="No hay Organizaciones de este tema por el momento.";
		}
	}else{
		echo "ew";
	}
	echo "$resultado";
?>