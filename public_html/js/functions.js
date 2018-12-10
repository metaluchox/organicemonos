function goTo(path){
	window.location=path;
}

function login(){
	var email=document.getElementById("inputEmail").value;
	var pass=document.getElementById("inputPassword").value;
	procesarLogin(email,pass);
}
function loginAdmin(){
	var email=document.getElementById("inputEmail").value;
	var pass=document.getElementById("inputPassword").value;
	procesarLoginA(email,pass);
}

function procesarLoginA(email,pass){
	var parametros = {
			"mail" : email,
			"pswd" : pass,
	};
	$.ajax({
			data:  parametros,
			url:   'resources/loginA.php',
			type:  'post',
			beforeSend: function () {
					$("#loginForm").html("Procesando, espere por favor...");
			},
			success:  function (response) {
				if(response==1){
					alert("Contrasena Invalida");
					goTo("admin.html");
				}if(response==2){
					alert("Correo Invalido");
					goTo("admin.html");
				}
				if(response!=1 && response!=2){
					localStorage.setItem('admin', "");
					var parametros = response.split("-");
					localStorage.setItem('admin', parametros[0]);
					window.location="AdminHome.html";
				}
			}
	});

}

function procesarLogin(email,pass){	
	var parametros = {
			"mail" : email,
			"pswd" : pass,
	};
	$.ajax({
			data:  parametros,
			url:   'resources/login.php',
			type:  'post',
			beforeSend: function () {
					$("#loginForm").html("Procesando, espere por favor...");
			},
			success:  function (response) {

				if(response==1){
					alert("Contrasena Invalida");
					goTo("login.html");
				}if(response==2){
					alert("Correo Invalido");
					goTo("login.html");
				}
				if(response!=1 && response!=2){
					localStorage.setItem('Correo', "");
					localStorage.setItem('Nombre', "");
					localStorage.setItem('Appelido', "");
					localStorage.setItem('Telefono', "");
					localStorage.setItem('Nick', "");
					var parametros = response.split("-");
					localStorage.setItem('Correo', parametros[0]);
					localStorage.setItem('Nombre', parametros[1]);
					localStorage.setItem('Nick', parametros[4]);
					localStorage.setItem('Appelido', parametros[2]);
					localStorage.setItem('Telefono', parametros[3]);
					window.location="home.html";
				}
			}
	});

}

function salir(){
	localStorage.setItem('admin', "");
	goTo("index.html");
}

function cerrarSesion(){
	localStorage.setItem('Correo', "");
	localStorage.setItem('Nombre', "");
	localStorage.setItem('Appelido', "");
	localStorage.setItem('Telefono', "");
	localStorage.setItem('Nick', "");
	goTo("index.html");
}

function cargarTema(id,tema){
	var parametros = {
		"tema" : tema,
	};
	$.ajax({
			data:  parametros,
			url:   'resources/obtenertema1.php',
			type:  'post',
			beforeSend: function () {
					$("#"+id+"").html("Procesando, espere por favor...");
			},
			success:  function (response) {
				if(response==1){
					alert("Ocurrió un problema con la conexión");
				}if(response=="No hay Organizaciones de este tema por el momento."){
					var msg="<a href='#' class='list-group-item active'>"
							  +"<h4 class='list-group-item-heading'>No existen Organizaciones de este tipo por el momento.</h4>"
							  +"<p class='list-group-item-text'>Disculpe las molestias</p>"
							+"</a>";
					$("#"+id+"").html(msg);
				}
				if(response!=1 && response!="No hay Organizaciones de este tema por el momento."){
					var parametros = response.split("/");
					$("#"+id+"").html("");
					for(var i=0;i<parametros.length-1;i++){
						var rsp= parametros[i].split("%");
						var msg="<a href='organizacion.html?group="+rsp[0]+"' class='list-group-item'>"
								  +"<h4 class='list-group-item-heading'>"+rsp[1]+"<small><p class='list-group-item-text pull-right'>Participantes("+rsp[4]+") </p></small></h4>"
								  +"<p class='list-group-item-text'>"+rsp[3]+"<small><p class='list-group-item-text pull-left'>"+rsp[6]+"("+rsp[7]+") </p><p class='list-group-item-text pull-right'>Valido Hasta("+rsp[5]+") </p></small></p>"
								+"</a>";

								$("#"+id+"").append(msg);
					}
				}
			}
	});
}

function cargarTodo(){
	var parametros = {
	};
	$.ajax({
		data:  parametros,
		url:   'resources/obtenertodo.php',
		type:  'post',
		beforeSend: function () {
				$("#tcontent").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response==1){
				alert("Ocurrió un problema con la conexión");
			}if(response=="No hay Organizaciones de este tema por el momento."){
				var msg="<a href='#' class='list-group-item active'>"
						  +"<h4 class='list-group-item-heading'>No existen Organizaciones por el momento.</h4>"
						  +"<p class='list-group-item-text'>Disculpe las molestias.</p>"
						+"</a>";
				$("#tcontent").html(msg);
			}
			if(response!=1 && response!="No hay Organizaciones de este tema por el momento."){
				var parametros = response.split("/");
				$("#tcontent").html("");
				for(var i=0;i<parametros.length-1;i++){
					var rsp= parametros[i].split("%");
					var msg="<a href='organizacion.html?group="+rsp[0]+"' class='list-group-item'>"
								  +"<h4 class='list-group-item-heading'>"+rsp[1]+"<small><p class='list-group-item-text pull-right'>Participantes("+rsp[4]+") </p></small></h4>"
								  +"<p class='list-group-item-text'>"+rsp[3]+"<small><p class='list-group-item-text pull-left'>"+rsp[6]+"("+rsp[7]+") </p><p class='list-group-item-text pull-right'>Valido Hasta("+rsp[5]+") </p></small></p>"
								+"</a>";
					$("#tcontent").append(msg);
				}
			}
		}
	});
}

function cargarPropio(correo){
	var parametros = {
		"correo" : correo,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/obtenerpropios.php',
		type:  'post',
		beforeSend: function () {
				$("#todoscontent").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response==1){
				alert("Ocurrió un problema con la conexión");
			}if(response=="No hay Organizaciones de este tema por el momento."){
				var msg="<a href='#' class='list-group-item active'>"
						  +"<h4 class='list-group-item-heading'>No existen Organizaciones por el momento.</h4>"
						  +"<p class='list-group-item-text'>Disculpe las molestias.</p>"
						+"</a>";
				$("#todoscontent").html(msg);
			}
			if(response!=1 && response!="No hay Organizaciones de este tema por el momento."){
				var parametros = response.split("/");
				$("#todoscontent").html("");
				for(var i=0;i<parametros.length-1;i++){
					var rsp= parametros[i].split("%");
					var msg="<a href='organizacion.html?group="+rsp[0]+"' class='list-group-item'>"
								  +"<h4 class='list-group-item-heading'>"+rsp[1]+"<small><p class='list-group-item-text pull-right'>Participantes("+rsp[4]+") </p></small></h4>"
								  +"<p class='list-group-item-text'>"+rsp[3]+"<small><p class='list-group-item-text pull-left'>"+rsp[6]+"("+rsp[7]+") </p><p class='list-group-item-text pull-right'>Valido Hasta("+rsp[5]+") </p></small></p>"
							+"</a>";
					$("#todoscontent").append(msg);
				}
			}
		}
	});
}

function crearOrganizacion(){
	var nombre=document.getElementById("nombre").value;
		for(var i=0; i<nombre.length;i++){
		if(nombre[i]=="'"){
			nombre=nombre.substr(0, i) + "'" + nombre.substr(i);
			i++;
		}
	}
	var descripcion=document.getElementById("descripcion").value;
		for(var i=0; i<descripcion.length;i++){
		if(descripcion[i]=="'"){
			descripcion=descripcion.substr(0, i) + "'" + descripcion.substr(i);
			i++;
		}
	}
	var tipo=document.getElementById("tipo").value;
	var tema=document.getElementById("tema").value;
	//var plazo=document.getElementById("idplazo").value;
	var plazo = $('#idplazo').datepicker({ dateFormat: 'yy-mm-dd' }).val();
	var date=new Date();
	var d= date.getDate();
	var m= date.getMonth()+2;
	var y= date.getFullYear();
	if(nombre=="" || descripcion==""){
		if(nombre==""){
			alert("Debe agregar un nombre a la iniciativa");
		}
		if(descripcion==""){
			alert("Debe agregar una descripción a la iniciativa");
		}
	}else{
		var parametros = {
			"nombre" : nombre,
			"descripcion" : descripcion,
			"tipo" : tipo,
			"tema" : tema,
			"correo" : localStorage.getItem("Correo"),
			"plazo" : plazo,
		};
		$.ajax({
			data:  parametros,
			url:   'resources/crearOrganizacion.php',
			type:  'post',
			beforeSend: function () {
					$("#OrganizacionForm").html("Procesando, espere por favor...");
			},
			success:  function (response) {
				if(response!=1){
					goTo("home.html");
				}else{
					alert("Ocurrió un error inesperado, intente nuevamente más tarde");
					goTo("home.html");
				}
				
			}
		});
	}
}

function buscar(){
	var bsqd=document.getElementById("bsq").value;
	var tipo=document.getElementById("btipo").value;
	var parametros = {
		"bsq" : bsqd,
		"tipo" : tipo,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/buscar.php',
		type:  'post',
		beforeSend: function () {
				$("#tcontent").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response!=1 && response!="No hay Organizaciones de este tema por el momento."){
				var parametros = response.split("/");
				$("#tcontent").html("");
				for(var i=0;i<parametros.length-1;i++){
					var rsp= parametros[i].split("%");
					var msg="<a href='organizacion.html?group="+rsp[0]+"' class='list-group-item'>"
								  +"<h4 class='list-group-item-heading'>"+rsp[1]+"<small><p class='list-group-item-text pull-right'>Participantes("+rsp[4]+") </p></small></h4>"
								  +"<p class='list-group-item-text'>"+rsp[3]+"<small><p class='list-group-item-text pull-left'>"+rsp[6]+"("+rsp[7]+") </p><p class='list-group-item-text pull-right'>Valido Hasta("+rsp[5]+") </p></small></p>"
								+"</a>";
					$("#tcontent").append(msg);
				}
			}else{
				var msg="<a href='#' class='list-group-item active'>"
						  +"<h4 class='list-group-item-heading'>No existen Organizaciones por el momento.</h4>"
						  +"<p class='list-group-item-text'>Disculpe las molestias.</p>"
						+"</a>";
				$("#tcontent").html(msg);
			}
			
		}
	});
}

function cargarOrganizacion(id){
	var parametros = {
		"id" : id,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarOrganizacion.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1 && response!="No existe organizacion."){
				var parametros = response.split("/^/");
				for(var i=0;i<parametros.length-1;i++){
					var rsp= parametros[i].split("-^-");
					$("#nombre").append(rsp[1]);
					$("#descripcion").append(rsp[4]);
					$("#tema").append(rsp[2]);
					$("#tipo").append(rsp[3]);
				}
			}else{
				alert("Ocurrió un error, intente más tarde");
				goTo("home.html");
			}
			cargarParticipantes(id);
		}
	});
}

function cargarParticipantesA(id){
	var parametros = {
		"id" : id,
		"correo" :localStorage.getItem("Correo"),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarParticipantes.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!="ew" && response!="No existen participantes."){
					var rsp= response.split("-");
					$("#count").html("<span class='glyphicon glyphicon-user' aria-hidden='true'></span> Somos "+rsp[0]);
			}else{
				alert("Ocurrió un error, intente más tarde");
				goTo("AdminHome.html");
			}
		}
	});
}

function cargarParticipantes(id){
	var parametros = {
		"id" : id,
		"correo" :localStorage.getItem("Correo"),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarParticipantes.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {			
			if(response!="ew" && response!="No existen participantes."){
					var rsp= response.split("-");
					$("#count").html("<span class='glyphicon glyphicon-user' aria-hidden='true'></span> Somos "+rsp[0]);
					if(rsp[1]=="Seguir"){
						$("#mark").html("<button type='button' class='btn btn-info pull-right' onclick='follow("+id+");'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span>Seguir</button>");
					}else{
						$("#mark").html("<button type='button' class='btn btn-success pull-right' onclick='unfollow("+id+");'><span class='glyphicon glyphicon-ok' aria-hidden='true'></span>Siguiendo</button>");
					}
			
			}else{
				alert("Ocurrió un error, intente más tarde");
				goTo("home.html");
			}
		}

	});
}

function follow(id){
	var parametros = {
		"id" : id,
		"correo" :localStorage.getItem("Correo"),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/follow.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1){
				$("#mark").html("<button type='button' class='btn btn-success pull-right' onclick='unfollow("+id+");'><span class='glyphicon glyphicon-ok' aria-hidden='true'></span>Siguiendo</button>");
			}else{
				alert("Ocurrió un error, intente más tarde");
				goTo("home.html");
			}
			cargarParticipantes(id);
			cargarRec(id);
		}
	});
}

function unfollow(id){
	var parametros = {
		"id" : id,
		"correo" :localStorage.getItem("Correo"),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/unfollow.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1){
				$("#mark").html("<button type='button' class='btn btn-info pull-right' onclick='follow("+id+");'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span>Seguir</button>");
			}else{
				alert("Ocurrió un error, intente más tarde");
				goTo("home.html");
			}
			cargarParticipantes(id);
			cargarRec(id);
		}
	});
}

function cargarComentarios(id){
	var parametros = {
		"id" : id,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarComentarios.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1&& response!="No existe organizacion."){
				var parametros = response.split("/^/");
				for(var i=parametros.length-2;i>=0;i--){
					var rsp= parametros[i].split("-^-");
					var msg="<div class='media'>"
								+"<div class='media-body'>"
									+"<h4 class='media-heading'>"+rsp[5]+""
										+"<small> "+rsp[2]+"</small>"
									+"</h4>"
									+"          "+rsp[3]+""
								+"</div>"
							+"</div>"
							+"<hr>";
					$("#comentarios").prepend(msg);
				}
			}else{
				if(response=="No existe organizacion."){
					var msg="<div class='media'>"
								+"<div class='media-body'>"
									+"<h4 class='media-heading'>No hay Comentarios"
										+"<small></small>"
									+"</h4>"
									+"          Disculpe Las Molestias"
								+"</div>"
							+"</div>"
							+"<hr>";
					$("#comentarios").prepend(msg);
				}else{
					alert("Ocurrió un error, intente más tarde");
					goTo("home.html");
				}
			}
		}
	});
}


function crearComentario(){
	var arr = document.URL.match(/group=([0-9]+)/)
	var id = arr[1];
	var coment=document.getElementById("comment").value;
	for(var i=0; i<coment.length;i++){
		if(coment[i]=="'"){
			coment=coment.substr(0, i) + "'" + coment.substr(i);
			i++;
		}
	}
	var parametros = {
		"id" : id,
		"correo" : localStorage.getItem('Correo'),
		"comentario" : coment,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/crearComentario.php',
		type:  'post',
		beforeSend: function () {

		},
		success:  function (response) {
			if(response!=1){
				goTo("organizacion.html?group="+id+"");
			}else{
				alert("Ocurrió un error inesperado, intente nuevamente más tarde");
				goTo("home.html");
			}
			
		}
	});
}

 function enterPress(e){
	 if (e.keyCode == 13) {
		crearComentario();
		return false;
    }
 }
 
 function cargarPertenencia(){
	var parametros = {
		"correo" : localStorage.getItem('Correo'),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/obtenerPertenencia.php',
		type:  'post',
		beforeSend: function () {
				$("#pertenezco").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response==1){
				alert("Ocurrió un problema con la conexión");
			}
			if(response=="No hay Organizaciones de este tema por el momento."){
				var msg="<a href='#' class='list-group-item active'>"
						  +"<h4 class='list-group-item-heading'>No existen Organizaciones por el momento.</h4>"
						  +"<p class='list-group-item-text'>Disculpe las molestias.</p>"
						+"</a>";
				$("#pertenezco").html(msg);
			}
			if(response!=1 && response!="No hay Organizaciones de este tema por el momento."){
				var parametros = response.split("/");
				$("#pertenezco").html("");
				for(var i=0;i<parametros.length-1;i++){
					var rsp= parametros[i].split("%");
					var msg="<a href='organizacion.html?group="+rsp[0]+"' class='list-group-item'>"
								  +"<h4 class='list-group-item-heading'>"+rsp[1]+"<small><p class='list-group-item-text pull-right'>Participantes("+rsp[4]+") </p></small></h4>"
								  +"<p class='list-group-item-text'>"+rsp[3]+"<small><p class='list-group-item-text pull-left'>"+rsp[6]+"("+rsp[7]+") </p><p class='list-group-item-text pull-right'>Valido Hasta("+rsp[5]+") </p></small></p>"
							+"</a>";
					$("#pertenezco").append(msg);
				}
			}
		}
	});
 }
 
 function nuevaCuenta(){
	$("#loginForm").html("");
	var str= "<label>Nombre </label>"
				+"<label for='nombre' class='sr-only'>Nombre</label>"
				+"<input type='text' id='nombre' class='form-control' placeholder='Nombre' required>"
				+"<label>Apellido </label>"
				+"<label for='Apellido' class='sr-only'>Apellido</label>"
				+"<input type='text' id='apellido' class='form-control' placeholder='apellido' required>"
				+"<label for='rut'>Rut <small> (sin puntos y <n>con</n> guion)</small></label>"
				+"<label for='rut' class='sr-only'>Rut</label>"
				+"<input type='text' id='rut' class='form-control' placeholder='12345678-9' required>"
				+"<label for='nombre'>Nick</label>"
				+"<label for='nick' class='sr-only'>Nick</label>"
				+"<input type='text' id='nick' class='form-control' placeholder='Nick' required>"
				+"<label>Telefono </label>"
				+"<label for='telefono' class='sr-only'>Telefono</label>"
				+"<input type='text' id='telefono' class='form-control' placeholder='Telefono' required>"
				+"<label>Correo</label>"
				+"<label for='inputEmail' class='sr-only'>Email address</label>"
				+"<input type='email' id='inputEmail' class='form-control' placeholder='Email address' required autofocus>"
				+"<label>Contraseña</label>"
				+"<label for='inputPassword' class='sr-only'>Password</label>"
				+"<input type='password' id='inputPassword' class='form-control' placeholder='Password' required>"
				+"<label>Repita Contraseña </label>"
				+"<label for='inputPassword2' class='sr-only'>Password</label>"
				+"<input type='password' id='inputPassword2' class='form-control' placeholder='Password' required>"
				+"<label>Pregunta Secreta </label>"
				+"<label for='pregunta' class='sr-only'>Pregunta </label>"
				+"<select id='pregunta' class='form-control'>"
					+"<option value='¿Nombre de tu primera escuela?'>¿Nombre de tu primera escuela?</option>"
					+"<option value='¿Nombre de tu primera mascota?'>¿Nombre de tu primera mascota?</option>"
					+"<option value='¿Nombre de tu primer profesor?'>¿Nombre de tu primer profesor?</option>"
				+"</select>"
				+"<label>Respuesta Secreta </label>"
				+"<label for='respuesta' class='sr-only'>Respuesta Secreta</label>"
				+"<input type='text' id='respuesta' class='form-control' placeholder='Respuesta' required></br>"
				+"<input type='checkbox' name='edad' id='edad' value='0'> Tengo más de 18 años</br></br>"
				+"<center><button class='btn  btn-danger btn-xlarge ' type='reset' onclick='go();'>Volver</button><button class='btn  btn-primary btn-xlarge ' type='submit' onclick='crearCuenta();'>Registrarse</button></center>";
	$("#loginForm").append(str);
 }
  
function crearCuenta(){
	var edad= document.getElementById("edad").checked;
	if(edad){
			var nombre=document.getElementById("nombre").value;
			var apellido=document.getElementById("apellido").value;
			var telefono=document.getElementById("telefono").value;
			var correo=document.getElementById("inputEmail").value;
			var pass1=document.getElementById("inputPassword").value;
			var pass2=document.getElementById("inputPassword2").value;
			var preg=document.getElementById("pregunta").value;
			var resp=document.getElementById("respuesta").value;
			var nick=document.getElementById("nick").value;
			var rut=document.getElementById("rut").value;

				var parametros = {
				"nombre" : nombre,
				"apellido" : apellido,
				"telefono" : telefono,
				"correo" : correo,
				"pass1" : pass1,
                                "pass2" : pass2,
				"preg" : preg,
				"resp" : resp,
				"nick" : nick,
				"rut" : rut,
			};
			$.ajax({
				data:  parametros,
				url:   'resources/crearCuenta.php',
				type:  'post',
                                dataType: 'json',

				success:  function (response) {

                                        if(response.codigo == 1){
                                            if(response.ingresado == 1){
                                                $("#loginForm").html("<center>Cuenta Ingresada con Exito!</br></br><button class='btn  btn-primary btn-xlarge ' type='submit' onclick='go();'>Continuar</button></center>");
                                            }else{
                                                alert("ocurrio un error inesperado, intente deneuvo m�s tarde");
						goTo("login.html");
                                            }
                                            
                                        }else{
                                            var strMensajes = "PROBLEMAS DE VALIDACION\n\n";
                                            if(response.mensajeNmbre != null){
                                                strMensajes += "- "+response.mensajeNmbre+"\n";
                                            }
                                            if(response.mensajeApellido != null){
                                                strMensajes += "- "+response.mensajeApellido+"\n";
                                            }
                                            if(response.mensajeRut != null){
                                                strMensajes += "- "+response.mensajeRut+"\n";
                                            }
                                            if(response.mensajeEmail != null){
                                                strMensajes += "- "+response.mensajeEmail+"\n";
                                            }
                                            if(response.mensajeTelefono != null){
                                                strMensajes += "- "+response.mensajeTelefono+"\n";
                                            }
                                            if(response.mensajeRespuesta != null){
                                                strMensajes += "- "+response.mensajeRespuesta+"\n";
                                            }
                                            if(response.mensajeNick != null){
                                                strMensajes += "- "+response.mensajeNick+"\n";
                                            }
                                            if(response.mensajePswd != null){
                                                strMensajes += "- "+response.mensajePswd+"\n";
                                            }                                            

                                            alert(strMensajes);
                                            //nuevaCuenta();
                                        }
				}
			});
			//}
	}else{
		alert("Debes tener m\u00e1s de 18 a\u00f1os para utilizar organicemonos.com");
		nuevaCuenta();
	}


}
 
function recuperarPass(){
	$("#loginForm").html("");
	var str= "<label> Ingresa tu Correo</label>"
			+"<label for='inputEmail' class='sr-only'>Email address</label>"
			+"<input type='email' id='inputEmail' class='form-control' placeholder='Email address' required autofocus></br>"
			+"<center><button class='btn  btn-danger btn-xlarge ' type='reset' onclick='go();'>Salir</button><button class='btn  btn-primary btn-xlarge ' type='submit' onclick='cargarPreg();'>Continuar</button></center>";
	$("#loginForm").append(str);
}

function cargarPreg(){
	var correo=document.getElementById("inputEmail").value;
	var parametros = {
		"correo" : correo,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarpreg.php',
		type:  'post',
		beforeSend: function () {
				$("#loginForm").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response == "No existe correo."){
				alert("Correo Ingresado no es valido");
				recuperarPass();
			}
			if(response== 1){
				alert("Ocurrió un error inesperado, intente más tarde");
				goTo("login.html");
			}
			$("#loginForm").html("");
			localStorage.setItem('temp', correo);
			var str= "<label>"+response+"</label>"
			+"<label for='resp' class='sr-only'>Respuesta Secreta</label>"
			+"<input type='text' id='resp' class='form-control' placeholder='Respuesta' required autofocus></br>"
			+"<center><button class='btn  btn-danger btn-xlarge ' type='reset' onclick='go();'>Salir</button><button class='btn  btn-primary btn-xlarge ' type='submit' onclick='verificarResp();'>Verificar</button></center>";
			$("#loginForm").append(str);
		}
	});
}

function verificarResp(){
	var resp=document.getElementById("resp").value;
	var correo= localStorage.getItem('temp');
	var parametros = {
		"resp" : resp,
		"correo" : correo,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/verresp.php',
		type:  'post',
		beforeSend: function () {
				$("#loginForm").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response == "no"){
				alert("Respuesta Incorrecta");
				go();
			}
			if(response== 1){
				alert("Ocurrió un error inesperado, intente más tarde");
				goTo("login.html");
			}
			$("#loginForm").html("");
			var str= "<label> Nueva Contraseña</label>"
				+"<label for='inputPassword' class='sr-only'>Password</label>"
				+"<input type='password' id='inputPassword' class='form-control' placeholder='Password' required>"
				+"<label>Repita Nueva Contraseña </label>"
				+"<label for='inputPassword2' class='sr-only'>Password</label>"
				+"<input type='password' id='inputPassword2' class='form-control' placeholder='Password' required>"
			+"<center><button class='btn  btn-danger btn-xlarge ' type='reset' onclick='go();'>Salir</button><button class='btn  btn-primary btn-xlarge ' type='submit' onclick='cambiarPass();'>Verificar</button></center>";
			$("#loginForm").append(str);
		}
	});
}

function cambiarPass(){
	var correo= localStorage.getItem('temp');
	var pass1=document.getElementById("inputPassword").value;
	var pass2=document.getElementById("inputPassword2").value;
	if(pass1!=pass2){
		alert("las contraseñas no coinciden");
		recuperarPass();
	}
	var parametros = {
		"pswd" : pass1,
		"correo" : correo,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cambiarpass.php',
		type:  'post',
		beforeSend: function () {
				$("#loginForm").html("Procesando, espere por favor...");
		},
		success:  function (response) {
			if(response==1){
				alert("Ocurrió un error inesperado, intente más tarde");
			}else{
				alert("Contraseña cambiada con exito");
				go();
			}
		}
	});
}

function cargarComentarioAdmin(id){
	var parametros = {
		"id" : id,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarCadmin.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1&& response!="No existe organizacion."){
				var parametros = response.split("/^/");
				for(var i=parametros.length-2;i>=0;i--){
					var rsp= parametros[i].split("-^-");
					var msg="<div class='alert alert-info' role='alert'>"
								+"<strong>[@"+rsp[1]+"] Mensaje de Administrador : <strong> "+rsp[0]+" ."
							+"</div>";
					$("#msgadmin").prepend(msg);
				}
			}else{
				if(response==1){
					alert("Ocurrió un error, intente más tarde");
					goTo("home.html");
				}
			}
		}
	});
}
function cargarPlazo(){
	/*var date=new Date();
	var d= date.getDate();
	var m= date.getMonth()+2;
	var y= date.getFullYear();
	var msg="<input type='date' name='plazo' id='idplazo' min='"+y+"-"+m+"-"+d+"'>";
	$("#plazo").html(msg);*/
	$( "#idplazo" ).datepicker({ dateFormat: 'yy-mm-dd' });
}

function cargarCreador(id){
	var parametros = {
		"id" : id,
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarCreador.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1&& response!="No existe organizacion."){
				var msg="<h4><b>Iniciativa creada por "+response+" </b></h4>";
				$("#creador").html(msg);
			}else{
				if(response==1){
					alert("Ocurrió un error, intente más tarde");
					goTo("home.html");
				}
			}
		}
	});
}

function cargarRec(id){
	var parametros = {
		"id" : id,
		"correo" : localStorage.getItem("Correo"),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/cargarRec.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1&& response!="No existe organizacion."){
				if(response=="mostrar"){
					var msg="<button type='button' class='btn btn-info pull-right' id='tipo' onclick='rec("+id+");'><span class='glyphicon glyphicon-arrow-up' aria-hidden='true' ></span> Recomendar Usuario</button>";
					$("#rec").html(msg);
				}else{
					var msg="<button type='button' class='btn btn-danger pull-right' id='tipo'><span class='glyphicon glyphicon-heart' aria-hidden='true' ></span>Usuario Recomendado</button>";
					$("#rec").html(msg);
				}
			}else{
				if(response==1){
					alert("Ocurrió un error, intente más tarde");
					goTo("home.html");
				}
			}
		}
	});
	
}
function rec(id){
	var parametros = {
		"id" : id,
		"correo" : localStorage.getItem("Correo"),
	};
	$.ajax({
		data:  parametros,
		url:   'resources/addRec.php',
		type:  'post',
		beforeSend: function () {
		},
		success:  function (response) {
			if(response!=1){
				cargarRec(id);
			}else{
				if(response==1){
					alert("Ocurrió un error, intente más tarde");
					goTo("home.html");
				}
			}
		}
	});
}
function go(){
	window.location="login.html";
}
$(document).ready(function(){
	var fileName = location.pathname.split("/").slice(-1);
	if(fileName=="home.html"){
		if(localStorage.getItem('Correo')=="" || localStorage.getItem('Nombre')=="" ||localStorage.getItem('Apellido')=="" ||localStorage.getItem('Telefono')==""){
			goTo("index.html");
		}else{
			$("#welcome").append("<h2>Bienvenido, "+localStorage.getItem('Nick')+"</h2>");
			cargarPlazo();
			cargarTema("t1content","Privada");
			cargarTema("t2content","Comunitaria");
			cargarTodo();
			cargarPropio(localStorage.getItem('Correo'));
			cargarPertenencia();
		}
	}
	if(fileName=="organizacion.html"){
		if(localStorage.getItem('Correo')=="" || localStorage.getItem('Nombre')=="" ||localStorage.getItem('Apellido')=="" ||localStorage.getItem('Telefono')==""){
			goTo("index.html");
		}
		var arr = document.URL.match(/group=([0-9]+)/)
		var id = arr[1];
		cargarOrganizacion(id);
		cargarComentarios(id);
		cargarComentarioAdmin(id);
		cargarCreador(id);
		cargarRec(id);
	}
	
	$("#enlaceFacebook").click(function(){
				var dir=window.document.URL;
				var tit=window.document.title;
				var tit2=encodeURIComponent(tit);
				var dir2= encodeURIComponent(dir);
				window.open('http://www.facebook.com/share.php?u='+dir2+'&amp;t='+tit2+''); 

	});
	
	$("#enlaceTwitter").click(function(){
		var dir=window.document.URL;
		var tit=window.document.title;
		var tit2=encodeURIComponent(tit);
		window.open('http://twitter.com/?status='+tit2+'%20'+dir+''); 

	});
	
});
