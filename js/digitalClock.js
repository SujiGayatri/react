// function fun(){
//     var x = new Date();
//     document.getElementsByClassName("hours")[0].innerHTML = x.getHours();
//     document.getElementsByClassName("minutes")[0].innerHTML = x.getMinutes();
//     document.getElementsByClassName("seconds")[0].innerHTML = x.getSeconds();
//     if(x.getSeconds()==20){
//         clearInterval(address);
//     }
// }
// var address=setInterval(fun,1000);
var h=0;
var min=0;
var sec=0;
var timer=null;
function formatTime(unit) {
    if (unit < 10) {
        return '0' + unit;
    } else {
        return unit;
    }
}
function fun(){
    var x = new Date();
    document.getElementsByClassName("seconds")[0].innerHTML = formatTime(sec);
    document.getElementsByClassName("minutes")[0].innerHTML = formatTime(min);
    document.getElementsByClassName("hours")[0].innerHTML = formatTime(h);
    if(x.getSeconds){
        // document.getElementsByClassName("seconds")[0].innerHTML = sec;
        sec++;
        if(sec==59){
            document.getElementsByClassName("minutes")[0].innerHTML = min;
            min++;
            sec =0;
            if(min==59){
                document.getElementsByClassName("hours")[0].innerHTML = h;
                h++;
                m=0;
            }
        }
    }
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
