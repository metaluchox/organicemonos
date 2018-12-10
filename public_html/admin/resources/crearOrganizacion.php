<?php 
	$nombre = $_POST['nombre'];
	$descripcion = $_POST['descripcion'];
	$tipo = $_POST['tipo'];
	$tema = $_POST['tema'];
	$correo=$_POST['correo'];
	$plazo=$_POST['plazo'];
	$exito=0;
	$id=0;
	include ('conexion.php');
	$sql="INSERT INTO organizacion(nombre,tema,tipo,Correo,descripcion,plazo,participantes) VALUES ('".$nombre."','".$tema."','".$tipo."','".$correo."','".$descripcion."','".$plazo."','1');";
	$resultado="";
	if($result=$conexion->query($sql)){
		$exito=1;
	}else{
		echo "1";
	}
	$sql="SELECT * FROM organizacion WHERE Correo ='".$correo."' AND descripcion='".$descripcion."';";
	if($result=$conexion->query($sql)){
		if($result->num_rows >0){
			while($row = $result->fetch_array()){
				$id=$row['id'];
			}
		}else{
			$resultado="No existe organizacion.";
		}
	}else{
		echo "1";
	}
	$sql="INSERT INTO participantes(id,Correo) VALUES ('".$id."','".$correo."');";
	$resultado="";
	if($result=$conexion->query($sql)){
		echo "exito";
	}else{
		echo "1";
	}
	echo "$resultado";
?>