<?php

function validacionRaiz($nombre, $apellido, $telefono, $correo, $pswd, $preg, $resp, $nick, $rut, $pswd2){
        $respuesta = new stdClass();
        $respuesta->codigo=1;
        $validPhone = "/^[0-9]{9}$/";
        $validaRut = "/^[0-9]+-[0-9kK]{1}/";
        $validaTexto = "/^[a-z]+$/i";
        
        if(!preg_match($validaTexto, $nombre)){
            $respuesta->codigo = 0;
            $respuesta->mensajeNmbre="Agregar un Nombre correcto.";
        }
        
        if(!preg_match($validaTexto, $apellido)){
            $respuesta->codigo = 0;
            $respuesta->mensajeApellido="Agregar un Apellido correcto.";
        }        
        
        if(!preg_match($validaRut, $rut)){
            $respuesta->codigo = 0;
            $respuesta->mensajeRut="El Rut esta invalido.";
        }
        
        if($correo != ""){
            if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                $respuesta->codigo = 0;
                $respuesta->mensajeEmail="Esta dirección de correo ($correo) es invalida.";
            }else{
                include ('conexion.php');
                $sql="SELECT * FROM usuario WHERE Correo ='".$correo."';";
                if($result=$conexion->query($sql)){
                        if($result->num_rows >0){
                                while($row = $result->fetch_array()){
                                        //echo "correo invalido";
                                         $respuesta->codigo = 0;
                                         $respuesta->mensajeEmail="Esta dirección de correo ($correo) ya tiene una cuenta asociada.";
                                }
                        }
                }           
            }            
        }else{
            $respuesta->codigo = 0;
            $respuesta->mensajeEmail="El campo Correo no puede estar vacio.";            
        }

        if($telefono != ""){
            if(!preg_match($validPhone, $telefono)){
                $respuesta->codigo = 0;
                $respuesta->mensajeTelefono="El numero de telefono ($telefono) es invalido.";
            }
        }else{
            $respuesta->codigo = 0;
            $respuesta->mensajeTelefono="El campo telefono no puede estar vacio.";              
        }
        
        if($resp == ""){
            $respuesta->codigo = 0;
            $respuesta->mensajeRespuesta="El campo Respuesta no puede estar vacio.";  
        }
        
        if($nick == ""){
            $respuesta->codigo = 0;
            $respuesta->mensajeNick="El campo Nick no puede estar vacio.";  
        }
        
        if($pswd != "" && $pswd2 != ""){
            if(strtoupper($pswd) != strtoupper($pswd2)){
                $respuesta->codigo = 0;
                $respuesta->mensajePswd="Las Constraseñas no coinciden.";
            }
        }else{
            $respuesta->codigo = 0;
            $respuesta->mensajePswd="El campo Contraseña no puede estar vacio.";            
        }
        
        return $respuesta;
}


?>

