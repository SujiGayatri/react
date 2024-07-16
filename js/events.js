var gender = '';

function fun(event){
    gender = event.target.value;
    console.log(event.target.value);
}

const submit = () => {
    console.log(gender)
}

var obj={
    Name:"",
    Age: " ",
    Gender: "",
    College: "",
    Branch : "",
    Address : "",
    MobileNO : ""
}
function namee(event){
    obj.Name=event.target.value
}
function age(event){
    obj.Age=event.target.value
}
function gender(event){
    obj.Gender=event.target.value
}
function college(event){
    obj.College=event.target.value
}
function branch(event){
    obj.Branch=event.target.value
}
function address(event){
    obj.Address=event.target.value
}
function mobile(event){
    obj.MobileNO=event.target.value
}
function sub(event){
    console.log(obj);
}