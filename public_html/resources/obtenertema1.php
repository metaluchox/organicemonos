<?php 
	$tema = $_POST['tema'];
	include ('conexion.php');
	$sql="SELECT * FROM organizacion WHERE tema = '".$tema."' AND terminado='0' ORDER BY participantes DESC LIMIT 5;";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$resultado=$resultado."".$row['id']."%".$row['nombre']."%".$row['tema']."%".$row['tipo']."%".$row['participantes']."%".$row['plazo']."%";
				$sql2="SELECT Nick,Reputacion FROM usuario WHERE Correo = '".$row['Correo']."';";
				if($result2=$conexion->query($sql2)){
					if($result2->num_rows >0){
						while($row2 = $result2->fetch_array()){
							$resultado=$resultado."".$row2['Nick']."%".$row2['Reputacion']."/";
						}
					}
				}	
			}
		}else{
			$resultado="No hay Organizaciones de este tema por el momento.";
		}
	}else{
		echo "1";
	}
	echo "$resultado";
?>