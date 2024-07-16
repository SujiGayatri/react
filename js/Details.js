var obj = {
    fname:"",
    lname:"",
    dob:"",
    fathername:"",
    mothername:"",
    address:"",
    gender:"",
    cer:"",
    sscy:"",
    sscper:"",
    sscp:"",
    intery:"",
    interper:"",
    interp:"",
    techy:"",
    techper:"",
    techp:"",
    skills:"",
    hobbies:""
}
function fname(event){
    obj.fname=event.target.value;
}
function lname(event){
    obj.lname=event.target.value;
}
function dob(event){
    obj.dob=event.target.value;
}
function fathername(event){
    obj.fathername=event.target.value;
}
function mothernamethername(event){
    obj.mothernamethername=event.target.value;
}
function address(event){
    obj.address=event.target.value;
}
function gender(event){
    obj.gender=event.target.value;
}
function cer(event){
    obj.cer=event.target.value;
}
function sscy(event){
    obj.sscy=event.target.value;
}
function sscper(event){
    obj.sscper=event.target.value;
}
function sscp(event){
    obj.sscp=event.target.value;
}
function intery(event){
    obj.intery=event.target.value;
}
function interper(event){
    obj.interper=event.target.value;
}
function interp(event){
    obj.interp=event.target.value;
}
function techy(event){
    obj.techy=event.target.value;
}
function techper(event){
    obj.techper=event.target.value;
}
function techp(event){
    obj.techp=event.target.value;
}
function skills(event){
    obj.skills=event.target.value;
}
function hobbies(event){
    obj.hobbies=event.target.value;
}
function sub(event){
    event.preventDefault();
    console.log(obj);
}