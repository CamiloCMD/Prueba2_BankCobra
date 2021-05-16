$(document).ready(function() {
    fn_indicadores();
    //fn_temperatura();
  });

$('#btn_logout').click(function(){
    window.open('index.html','_self');
})

function fn_indicadores(){
    $.getJSON('https://api.libreapi.cl/economy/indicators', function(data){
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
      var clima = data;
      
      for(w of clima){
        $('#lbl_temperatura').append('ahora si'+clima.data.name);
      }
      
        
    }).fail(function(){
        alert('ERROR API TEMPERATURA');
    });
}