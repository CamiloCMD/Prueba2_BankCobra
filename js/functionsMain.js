$(document).ready(function() {
    fn_indicadores();
    fn_temperatura();
  });

function fn_indicadores(){
    $.getJSON('https://api.libreapi.cl/weather/stations', function(data){
        var info = data;
        
        $('#lbl_dolar').append('Dólar: $'+''+info.data.dolar);
        $('#lbl_euro').append('Euro: $'+info.data.euro);
        $('#lbl_uf').append('UF: $'+info.data.uf);    
    }).fail(function(){
        alert('ERROR API INDICADORES');
    });
}

function fn_temperatura(){
    $.getJSON('https://api.libreapi.cl/weather/stations', function(data){
      
        
    }).fail(function(){
        alert('ERROR API TEMPERATURA');
    });
}