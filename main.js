document.querySelector("#btn").addEventListener("click", tiempoTrabajo)


function tiempoTrabajo() {
    var horas =Number (document.querySelector("#horas").value);
    var minutos = Number(document.querySelector("#minutos").value);
    var segundos = Number(document.querySelector("#segundos").value);
    var hrsSalida = Number(document.querySelector("#horas2").value);
    var minSalida = Number(document.querySelector("#minutos2").value);
    var segSalida = Number(document.querySelector("#segundos2").value); 
    var div = document.querySelector("#resultado")
    var entrada = new Date();

    entrada.setHours(horas,minutos, segundos);
    
    var salida = new Date();
    salida.setHours(hrsSalida,minSalida,segSalida);
    
    var tiempoTotal = new Date();

 tiempoTotal.setHours(salida.getHours()- entrada.getHours(), 
    salida.getMinutes()-entrada.getMinutes(), 
    salida.getSeconds()-entrada.getSeconds());

    console.log(tiempoTotal.getMinutes());
    
    div.innerHTML+= 'EL total de horas que trabajaste es igual a' + tiempoTotal.getHours() + ' con ' +
     tiempoTotal.getMinutes() + ' minutos  y ' + tiempoTotal.getSeconds() + ' Segundos '
}


