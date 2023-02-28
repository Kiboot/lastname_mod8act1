// ==== 9.1 Declaring and Calling Functions ====
/*
function functionName(parameter, if any){
    functional code should be here;
}
*/

function multiply(x,y){
    document.write(x*y);
}
function binaryAddition(firstNumber, secondNumber){
    alert(firstNumber + secondNumber);
}
// a sample basic function that prints
function function1(){
    document.write("function1 works like this.");
}
// a sample function that has 1 parameter
function function2( x ){
    alert(x);
}
//a sample function with multiple parameters
function function3( x , y , z){
    var sum = x + y + z;
    alert(x + " + " +y+ " + " +z+ " = " +sum);
}
// ==== 9.2 Event Handlers (Onclick, Onload etc.) ====
function changeImage(){
    document.getElementById("ricardo").src = "surprise.gif";
}
// more events found here https://w3schools.com/tags/ref_eventattributes.asp

// ==== 9.3 Processing Function Outputs ====
/*
1.  Handled using a print function

function(){
    document.write("Hi!");
}


2.  Handled using a return statement

function add(){
    let sum = x + y;
    return sum;
}
var xy = add();
*/
// ==== 9.4 Math and String Objects ====
/* 
1. Math Function
    let a = Math.PI; //returns the value of Pi
    Math.sin(x);     //returns the sine value of x
    Math.cos(y);     //returns the cosine value of y
    Math.tan(z);     //returns the tangent value of z
    x = Math.trunc(e);   //returns the value of e with removed decimals
    Math.random();   //returns a random floating-point pseudo-random
                     //value between zero (0) and one (1). Takees no
                     //input parameter



2. String Functions


*/
// ==== 9.5 Date and Number Objects ====
/*

//Sample function to generate a random number between ranges
function randomNumber(min, max) {
    let x = Math.random() * (max - min) + min;
    return x;
}

//Number Functions
x.toString();       //converts numeral value x to string value
parseInt(x);        //converts String value x into int value
parseFloat(x);      //converts String value x into float value

//Date Functions
*/
var dateToday = new Date();

//Sample display current datetime on click function

function clickToDate(){
    let date = new Date();
    document.getElementById("varx").innerHTML = date;
}









