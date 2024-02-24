const stopwatchDuration = document.getElementById("stopwatchDuration");
let start = document.getElementById("start");
let lap = document.getElementById("lap");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let laps = document.getElementById("laps");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");
let hrs=0;
let mins=0;
let sec=0;
let ms=0;
let timeInterval;
restart.onclick = start.onclick = () =>{
    timeInterval = setInterval(()=>{
        ms++;
        if(ms == 100){
            sec++;
            ms = 0;
        }
        if(sec == 60){
            mins++;
            sec=0;
        }
        if(mins == 60){
            hrs++;
            mins=0;
        }
        stopwatchDuration.innerHTML=`${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    },10);
    
};
const zeroPad = (num)=>{
    return String(num).padStart(2,"0");
};
let count=0;
lap.onclick = () =>{
    count++;
    let li = document.createElement("li");
    li.innerHTML=`${"#"+count} - ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behavior:"smooth"});
};
stop.onclick = () =>{
    clearInterval(timeInterval);
};
pause.onclick = () =>{
    clearInterval(timeInterval);
};
reset.onclick = () =>{
    laps.innerHTML="";
    hrs=0;
    mins=0;
    sec=0;
    ms=0;
    count=0;
    clearInterval(timeInterval);
    stopwatchDuration.innerHTML=`00:00:00:00`;
};