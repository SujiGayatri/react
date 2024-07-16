var hour = parseInt(window.prompt("Enter Hours"));
var min = parseInt(window.prompt("Enter Minutes"));
var sec=59;
var timer=null;
function update(){
    document.getElementsByClassName("seconds")[0].innerHTML = sec;
    document.getElementsByClassName("minutes")[0].innerHTML = min;
    document.getElementsByClassName("hours")[0].innerHTML = hour;
}
function fun(){
    sec--;
    if (hour === 0 && min === 0 && sec === 0) {
        clearInterval(timer);
        timer = null;
        return;
    }
    if(sec==0){
        sec =59;
        if(min==0){
            min=59;
            hour--;          
        }
        else {
            min--;
        }
    }
    else {
        sec--;
    }
    update();
}
function displayStart(){
    if(timer==null){
    timer = setInterval(fun,1000);
    // timer=null;
    }
}
function displayStop(){
    if(timer!=null){
        clearInterval(timer);
        timer = null;
    }
}
function displayReset(){
    displayStop()
    h=0;
    min=0;
    sec=0;
    fun();
}
