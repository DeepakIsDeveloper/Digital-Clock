const hourEl = document.getElementById('hour')
const minEl = document.getElementById('min')
const secEl = document.getElementById('sec')
const ampmEl = document.getElementById('ampm')


function clockUpdate(){
    let x=new Date()
    h=x.getHours()
    m=x.getMinutes()
    s=x.getSeconds()
    if(h>12){
        h-=12
        hourEl.innerText=h
        minEl.innerText=m
        secEl.innerText=s
        ampmEl.innerText='PM'
    }else{
        hourEl.innerText=h
        minEl.innerText=m
        secEl.innerText=s
        ampmEl.innerText='AM'
    }

    
}

setInterval(clockUpdate, 1000);
clockUpdate()