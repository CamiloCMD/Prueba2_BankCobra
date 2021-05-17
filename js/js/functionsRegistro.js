//Funcion Boton Limpiar
$('#btn_limpiar').click(function(e){ 
    fn_limpiar();
    $('#messagesRegistro').empty();
    fn_removeValido();
    fn_removeInvalido();
});
//Funcion inicio de pagina
$(document).ready(function(){
    val=false;
})

//Funcion boton Registrar
$('#btn_finalizarRegistro').click(function(e){
    var rut =$('#txt_rut').val();
    var nombres =$('#txt_nombres').val();
    var aPaterno =$('#txt_aPaterno').val();
    var aMaterno =$('#txt_aMaterno').val();
    var correo =$('#txt_correo').val();
    var tipoCuenta =$("#cmb_tipoCuenta option:selected").text();
    val=true;

    $('#messagesRegistro').empty();
    if(rut == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar un rut </li>');
        
    }
    if(nombres == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar un nombre </li>');
    }
    if(nombres.length <3){
        val=false;
        $('#messagesRegistro').append('<li> El nombre debe contener mas de 3 caracteres </li>');
    }
    if(aPaterno == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar el apellido paterno </li>');
        
    }
    if(aPaterno.length <3){
        val=false;
        $('#messagesRegistro').append('<li> El apellido paterno debe contener mas de 3 caracteres </li>');
    }
    if(aMaterno == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar el apellido materno </li>');
        
    }
    if(aMaterno.length <3){
        val=false;
        $('#messagesRegistro').append('<li> El apellido paterno debe contener mas de 3 caracteres </li>');
    }
    if(correo == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar un correo </li>');
    }
    if(tipoCuenta == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe seleccionar un tipo de cuenta </li>');
    }
        else if(tipoCuenta == "-- Seleccione --"){
            val=false;
            $('#messagesRegistro').append('<li> Debe seleccionar un tipo de cuenta </li>');
        }
    if(val){
        fn_addValido();  
        fn_removeInvalido();
        fn_mostrarRegistro();
        $('#lbl_registro').text('USUARIO REGISTRADO CORRECTAMENTE');
    }
    else{
        fn_addInvalido();
        fn_removeValido();
        fn_ocultarRegistro();
    }
    return val;
});
//Funcion para quitar clase is-invalid
function fn_removeInvalido(){
    $('#txt_rut').removeClass('is-invalid');
    $('#txt_nombres').removeClass('is-invalid');
    $('#txt_aPaterno').removeClass('is-invalid');
    $('#txt_aMaterno').removeClass('is-invalid');
    $('#txt_correo').removeClass('is-invalid');
    $('#cmb_tipoCuenta').removeClass('is-invalid');  
}
//Funcion para agregar clase is-invalid
function fn_addInvalido(){
    $('#txt_rut').addClass('is-invalid');
    $('#txt_nombres').addClass('is-invalid');
    $('#txt_aPaterno').addClass('is-invalid');
    $('#txt_aMaterno').addClass('is-invalid');
    $('#txt_correo').addClass('is-invalid');
    $('#cmb_tipoCuenta').addClass('is-invalid');  
}
//Funcion para quitar clase is-valid
function fn_removeValido(){
    $('#txt_rut').removeClass('is-valid');
    $('#txt_nombres').removeClass('is-valid');
    $('#txt_aPaterno').removeClass('is-valid');
    $('#txt_aMaterno').removeClass('is-valid');
    $('#txt_correo').removeClass('is-valid');
    $('#cmb_tipoCuenta').removeClass('is-valid');  

}
//Funcion para agregar clase is-valid
function fn_addValido(){
    $('#txt_rut').addClass('is-valid');
    $('#txt_nombres').addClass('is-valid');
    $('#txt_aPaterno').addClass('is-valid');
    $('#txt_aMaterno').addClass('is-valid');
    $('#txt_correo').addClass('is-valid');
    $('#cmb_tipoCuenta').addClass('is-valid');  
}

//Funcion boton ingresar
$('#btn_ingresarRegistro').click(function(){
    if(val){
        fn_login();
    }
    else{
        alert('Debe registrarse para ingresar')
    }
})

//Funcion abrir nueva pagina despues de login
function fn_login(){
    window.open('main.html','_self');
}


/*
//Funcion alternativa para validar rut
$('#btn_finalizarRegistro').click(function(e){
    fn_validarRut();
});
*/
//Funcion para validar rut
$('#btn_validar').click(function(e){
    fn_validarRut();
})

//Funcion para validar por medio de evento
$('#txt_rut').keydown(function(e){
    console.log(e.keyCode);
    if (e.keyCode == 9 || e.keyCode == 'tab') {
        fn_validarRut();
    }

})
//Funcion para validar rut
function fn_validarRut(){
    var valor = $('txt_rut').val();
    $.getJSON('https://api.libreapi.cl/rut/validate'+ valor, function(data){

        if(data.rut == undefined){
            $('#lbl_registro').val(data.message);
        }
        else{
            $('#lbl_registro').val(data.rut);
        }
    }).fail(function(){
        alert('AUN NO CONECTA CON LA API');
    });
}

//Funcion para limpiar formulario registro
function fn_limpiar(){
    $('#txt_rut').val("");
    $('#txt_nombres').val("");
    $('#txt_aPaterno').val("");
    $('#txt_aMaterno').val("");
    $('#txt_correo').val("");
    $('#cmb_tipoCuenta').val(""); 
}

//Funcion para ocultar label registro
function fn_ocultarRegistro(){
    $('#lbl_registro').css('visibility','hidden');
}

//Funcion para mostrar label registro
function fn_mostrarRegistro(){
    $("#lbl_registro").css("visibility", "visible");
}