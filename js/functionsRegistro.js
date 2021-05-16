//Boton Limpiar
$('#btn_limpiar').click(function(e){ 
    fn_limpiar();
    $('#messagesRegistro').empty();
    fn_removeValido();
    fn_removeInvalido();
});
//Boton Registrar
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
    if(aPaterno == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar el apellido paterno </li>');
        
    }
    if(aMaterno == ""){
        val=false;
        $('#messagesRegistro').append('<li> Debe ingresar el apellido materno </li>');
        
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
function fn_removeInvalido(){
    $('#txt_rut').removeClass('is-invalid');
    $('#txt_nombres').removeClass('is-invalid');
    $('#txt_aPaterno').removeClass('is-invalid');
    $('#txt_aMaterno').removeClass('is-invalid');
    $('#txt_correo').removeClass('is-invalid');
    $('#cmb_tipoCuenta').removeClass('is-invalid');  
}
function fn_addInvalido(){
    $('#txt_rut').addClass('is-invalid');
    $('#txt_nombres').addClass('is-invalid');
    $('#txt_aPaterno').addClass('is-invalid');
    $('#txt_aMaterno').addClass('is-invalid');
    $('#txt_correo').addClass('is-invalid');
    $('#cmb_tipoCuenta').addClass('is-invalid');  
}
function fn_removeValido(){
    $('#txt_rut').removeClass('is-valid');
    $('#txt_nombres').removeClass('is-valid');
    $('#txt_aPaterno').removeClass('is-valid');
    $('#txt_aMaterno').removeClass('is-valid');
    $('#txt_correo').removeClass('is-valid');
    $('#cmb_tipoCuenta').removeClass('is-valid');  

}

function fn_addValido(){
    $('#txt_rut').addClass('is-valid');
    $('#txt_nombres').addClass('is-valid');
    $('#txt_aPaterno').addClass('is-valid');
    $('#txt_aMaterno').addClass('is-valid');
    $('#txt_correo').addClass('is-valid');
    $('#cmb_tipoCuenta').addClass('is-valid');  
}

$('#btn_ingresar').click(function(){
    if(val){
        alert('¡INICIO DE SESIÓN CORRECTO!');
        window.open('main.html','_self');
    }

})
/*
$('#btn_finalizarRegistro').click(function(e){
    fn_validarRut();
});
*/

$('#btn_validar').click(function(e){
    fn_validarRut();
})
/*
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
        alert('AUN NO CONECTA CON LA API, PAJARON');
    });
}*/

function fn_limpiar(){
    $('#txt_rut').val("");
    $('#txt_nombres').val("");
    $('#txt_aPaterno').val("");
    $('#txt_aMaterno').val("");
    $('#txt_correo').val("");
    $('#cmb_tipoCuenta').val(""); 
}

function fn_ocultarRegistro(){
    $('#lbl_registro').css('visibility','hidden');
}
function fn_mostrarRegistro(){
    $("#lbl_registro").css("visibility", "visible");
}