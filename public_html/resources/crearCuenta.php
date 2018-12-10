<?php 

	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$telefono = $_POST['telefono'];
	$correo = $_POST['correo'];
	$pswd = $_POST['pass1'];
        $pswd2 = $_POST['pass2'];
	$preg = $_POST['preg'];
	$resp = $_POST['resp'];
	$nick = $_POST['nick'];
	$rut=$_POST['rut'];
        
        include('validaciones.php');
        $respuesta = validacionRaiz($nombre, $apellido, $telefono, $correo, $pswd, $preg, $resp, $nick, $rut, $pswd2);
        

        include ('conexion.php');
        if($respuesta->codigo == 1){
            $sql="INSERT INTO usuario(Correo,Nombre,Apellido,Contrasena,Telefono,Pregunta,Respuesta,Nick,rut) VALUES ('".$correo."','".$nombre."','".$apellido."','".$pswd."','".$telefono."','".$preg."','".$resp."','".$nick."','".$rut."');";
            $resultado="";
            if($result=$conexion->query($sql)){
                    //echo "exito";
                $respuesta->ingresado = 1;
            }else{
                $respuesta->ingresado = 0;
                    //echo "1";
            }
        }
        
        echo json_encode($respuesta);
?>