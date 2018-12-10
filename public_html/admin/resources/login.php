<?php 
	$email = $_POST['mail'];
	$contra= $_POST['pswd'];
	include ('conexion.php');
	$aux = new mysqli($servidor,$user,$pass,$BD);
	$sql="SELECT Correo,Nombre,Apellido,Telefono,Nick FROM usuario WHERE Correo='".$email."' AND Contrasena='".$contra."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$resultado=$resultado."".$row['Correo']."-".$row['Nombre']."-".$row['Apellido']."-".$row['Telefono']."-".$row['Nick'];
			}
		}else{
			$sql="SELECT Nick FROM usuario WHERE Correo='".$email."';";
			if($result=$conexion->query($sql)){
				if($result->num_rows >0){
					echo "1";
				}else{
					echo "2";
				}
			}
		}
	}else{
		echo "eww";
	}
	echo "$resultado";
?>