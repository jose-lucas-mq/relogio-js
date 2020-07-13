function time(){

    let agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    if(String(segundos).length < 2){
        s_segundos.innerHTML = `0${segundos}`;
    }else{
        s_segundos.innerHTML = segundos;
        s_minutos.innerHTML = minutos;
        s_horas.innerHTML = horas;
    }

}


setInterval(time, 1000);