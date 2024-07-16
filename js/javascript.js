// x = parseInt(window.prompt("Enter First number"))
// y = parseInt(window.prompt("Enter Second number"))
// console.log(x+y)
// if(x>y){
//     document.write(x)
// }
// else{
//     document.write(y)
// }
// var a=[11,22,33,44,55,66,77,88,99,0]
// a.map(i => {
//     console.log(i)
// })
// a.splice(2,1,101,202,303,404,505)
// console.log(a)
// var a={"name":"V",
//         "age":28,
//         "gender":"M"
// }
// console.log(Object.entries(a))
// var x=parseInt(window.prompt("Enter number"))
// c=0;
// var a=parseInt(window.prompt("Enter first number"));
// var b=parseInt(window.prompt("Enter second number"));
// for(let j=a;j<b;j++){
//     c=0;
//     for(let i=2;i<j;i++)
//     {
//         if(j%i==0){
//             c+=1
//         }
//     }
//     if(c==0){
//         console.log(j)
//     }
// }

// var x=new Date();
// document.write(x)
// console.log(x.getDate())
// console.log(x.getMonth())
// console.log(x.getFullYear())
// console.log(x.getHours())
// console.log(x.getMinutes())
// console.log(x.getSeconds())
// var y=x.getMonth()+1
// document.write(x.getDate()+"-"+y+"-"+x.getFullYear())
// console.log(Math.round(5.5))  //nearest integer
// console.log(Math.ceil(5.5))  // highest nearest int
// console.log(Math.floor(5.5)) // lowest near int
// console.log(Math.trunc(5.55)) // removes decimal values
// console.log(Math.sqrt(3))
// console.log(Math.pow(2,3))
// console.log(Math.abs(-5.5))
// console.log(Math.sign(-5.5))
// console.log(Math.sign(5.5))
// console.log(Math.sign(0))
// console.log(Math.min(5,8,3,1,9,44,77,65))
// console.log(Math.max(5,8,3,1,9,44,77,65))
// console.log(Math.round(Math.random() *100))
// function add(a,b,c){
//     console.log(a+b+c);
// }
// add(2,4)

// error handling
// try{
//     let a=parseInt(window.prompt("Enter first value"));
//     console.log(a);
//     a.upper();
//     // let b=parseInt(window.prompt("Enter second value"));
//     console.log(a);
// }
// catch(e){
//     console.log(e.name);
// }

// var a=parseInt(window.prompt("Enter score"))
// var grade;
// if(90<a && a<=100){
//     grade='A';
// }
// else if(80<a && a<=90){
//     grade='B';
// }
// else if(70<a && a<=80){
//     grade='C';
// }
// else if(60<a && a<=70){
//     grade='D';
// }
// else{
//    grade='fail';
// }
// console.log(grade);


// var a=parseInt(window.prompt("Enter a"));
// var b=parseInt(window.prompt("Enter b"));
// var c=parseInt(window.prompt("Enter c"));
// var s = (a+b+c)/2;
// var x = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(x);


var a = parseInt(window.prompt("Enter coefficient of x^2"));
var b = parseInt(window.prompt("Enter coefficient of x"));
var c = parseInt(window.prompt("Enter constant"));
var x = (b*b) - (4*a*c);
if(x<0){
    console.log("roots are real");
}
else{
    var r1 = (-b + Math.sqrt(x))/(2*a);
    var r2 = (-b - Math.sqrt(x))/(2*a);
}
console.log(r1,r2);