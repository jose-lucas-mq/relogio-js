function time(){

    let agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    s_segundos.innerHTML = segundos;
    s_horas.innerHTML = horas;
    s_minutos.innerHTML = minutos;

    if(String(segundos).length == 1){
        s_segundos.innerHTML = `0${segundos}`;
    }

    if(String(horas).length == 1){
        s_horas.innerHTML = `0${horas}`;
    }

    if(String(minutos).length == 1){
        s_minutos.innerHTML = `0${minutos}`;
    }
    

}


setInterval(time, 1000);