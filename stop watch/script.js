const time=document.getElementById("time")
let timeSpent=0;
let interval=null

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const min= Math.floor(timeSpent/60)
    const sec=timeSpent%60
    time.innerHTML=`${padStart(min)}:${padStart(sec)}`;
}

function timer(){
    timeSpent++
    setTime()
}

function timerStart(){
    if (interval) {
        timerStop()
    }
    interval= setInterval(timer,1000)
}
function timerStop(){
    clearInterval(interval)
}
function timerReset(){
    timerStop()
    timeSpent=0;
    setTime()
}