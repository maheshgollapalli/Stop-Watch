let startBtn=document.getElementById("startBtn")

let seconds=0;
let minutes=0;
let hours=0;
let interval=false;
let count;
startBtn.onclick=()=>{
    if(interval){
        return
    }
    interval=true
    count=setInterval(()=>{
        if(minutes==60){
            hours++;
            minutes=0;
        }
        else if(seconds==60){
            minutes++;
            seconds=0;
        }
        else{
            seconds++;
        }

        let timer=document.getElementById("timer")
        timer.innerHTML=` ${hours<10?"0"+hours:hours} : ${minutes<10?"0"+minutes:minutes} : ${seconds<10?"0"+seconds:seconds}`

    },1000)
}

let resetBtn=document.getElementById("resetBtn")
resetBtn.onclick=()=>{
    seconds=0;
    minutes=0;
    hours=0;
    timer.innerHTML=`00 : 00 : 00`
    interval=false
}

let stopBtn=document.getElementById("stopBtn")
stopBtn.onclick=()=>{
    clearInterval(count)
    interval=false
}
