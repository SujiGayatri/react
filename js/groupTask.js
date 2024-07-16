var obj = {
    fname:"",
    mobile:""
}
function fname(event){
    obj.fname=event.target.value;
}
function mobile(event){
    obj.mobile=event.target.value;  
}
function sub(event){
    event.preventDefault();
    console.log(obj);
}
function display(){
    var x=document.getElementsByClassName("form-dis")[0];
    x.style.display = "block";
}