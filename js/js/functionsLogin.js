/*
//Funcion alternativa para abrir nueva pagina
$('#btn_ingresar').click(function(){
    window.open('main.html','_self');
})
*/

//Funcion para abrir nueva pag despues de login
function fn_login(){
    window.open('main.html','_self');
}

//Funcion para limpiar
$('#btn_limpiar').click(function(e){ 
    fn_limpiar();
    $('#messagesLogin').empty();
});

//Funcion para login
$('#btn_ingresar').click(function(){
    var rut = $('#txt_rutLogin').val();
    var pass =$('#txt_passLogin').val();
    val = true;

    $('#messagesLogin').empty();

    if(rut == ""){
        val=false;
        $('#messagesLogin').append('<li> Debe ingresar un rut </li>');
    }
    if(rut.length <9){
        val=false;
        $('#messagesLogin').append('<li> El rut debe contener al menos 9 caracteres </li>');
    }
    if(pass == ""){
        val=false;
        $('#messagesLogin').append('<li> Debe introducir una contraseña </li>');
    }

    if(pass.length<6){
        val=false;
        $('#messagesLogin').append('<li> La contraseña debe tener al menos 6 caracteres</li>')
    }


    else{
        fn_login();
        alert('¡INICIO DE SESIÓN CORRECTO!');
    }
})

//Funcion que limpia formulario
function fn_limpiar(){
    $('#txt_rutLogin').val("");
    $('#txt_passLogin').val("");
}

	
