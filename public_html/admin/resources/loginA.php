<?php 
	$email = $_POST['mail'];
	$contra= $_POST['pswd'];
	include ('conexion.php');
	$aux = new mysqli($servidor,$user,$pass,$BD);
	$sql="SELECT correo,nick FROM admin WHERE correo='".$email."' AND pass='".$contra."';";
	$resultado="";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$resultado=$resultado."".$row['correo']."-".$row['nick'];
			}
		}else{
			$sql="SELECT * FROM admin WHERE correo='".$email."';";
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