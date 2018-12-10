<?php 
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$telefono = $_POST['telefono'];
	$correo = $_POST['correo'];
	$pswd = $_POST['pass1'];
	$preg = $_POST['preg'];
	$resp = $_POST['resp'];
	$nick = $_POST['nick'];
	$rut=$_POST['rut'];
	include ('conexion.php');
	$sql="SELECT * FROM usuario WHERE Correo ='".$correo."';";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				echo "correo invalido";
			}
		}
	}else{
	}
	$sql="INSERT INTO usuario(Correo,Nombre,Apellido,Contrasena,Telefono,Pregunta,Respuesta,Nick,rut) VALUES ('".$correo."','".$nombre."','".$apellido."','".$pswd."','".$telefono."','".$preg."','".$resp."','".$nick."','".$rut."');";
	$resultado="";
	if($result=$conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>