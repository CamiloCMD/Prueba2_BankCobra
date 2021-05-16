/*
$('#btn_ingresar').click(function(){
    window.open('main.html','_self');
})
*/
function fn_login(){
    window.open('main.html','_self');
}
$('#btn_limpiar').click(function(e){ 
    fn_limpiar();
    $('#messagesLogin').empty();
});

$('#btn_ingresar').click(function(){
    var rut = $('#txt_rutLogin').val();
    var pass =$('#txt_passLogin').val();
    val = true;

    $('#messagesLogin').empty();

    if(rut == ""){
        val=false;
        $('#messagesLogin').append('<li> Debe ingresar un rut </li>');
    }
    if(pass == ""){
        val=false;
        $('#messagesLogin').append('<li> Debe introducir una contraseña </li>');
    }
    else{
        fn_login();
        alert('¡INICIO DE SESIÓN CORRECTO!');
    }
})

function fn_limpiar(){
    $('#txt_rutLogin').val("");
    $('#txt_passLogin').val("");
}