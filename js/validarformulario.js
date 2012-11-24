$(document).ready(function () {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    // aqui va a ir la validacion
    $("#submit").click(function () {  
    	//valida la extencion del nombre    	
    	$(".error").remove();

        if($("#id_nombre").val() == "") {  
            $("#id_nombre").focus().after("Ingrese un nombre");  
            return false;  
        }

		//valida la extencion del apellido
        if($("#id_apellido").val().length < 4) {  
            $("#id_apellido").focus().after("Ingrese un apellido");  
            return false;  
        }

    	//valida que este bien el correo
		//if($("#id_email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
		if($("#id_email").val()==""|| !emailreg.test($("#email").val()) {  
            $("#id_email").focus().after("ingrese un e-mail valido");  
        return false;         	
    	}          

    	//valida que la contraseña tenga minimo 5 elementos
		if($("#id_password1").val().length < 5) {  
            $("#id_password1").focus().after("La contraseña debe contener minimo 5 caracteres");  
            return false;  
        }

    	//valida que la contraseña tenga minimo 5 elementos
		if($("#id_password2").val().equalTo("#id_password1") {  
            $("#id_password2").focus().after("Las contraseñas no coinciden");  
            return false;  
        }       
    });  
});  
