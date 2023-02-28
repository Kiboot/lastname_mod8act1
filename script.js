//Javascript data types


// -- Strings --
var thisIsString = "This is a string";
var thisIsAlsoString = 'This is another string';
// -- Numeral --
var thisIsInteger = 12;
var thisIsAnotherInteger = -12;
var thisIsFloatingPoint = 1.2;
var thisIsAnotherFloatingPoint = -0.1222222222;
var yetAnotherFloatingPoint = 1.2e2;
// -- Boolean --
var thisIsBoolean = true;
var anotherBoolean = false;
// -- Symbol --
var thisIsSymbol = Symbol();
var symbolWithADescription = Symbol("description");
// -- Undefined Data --
var undefinedUntilSomethingIsInserted;
// -- Null Data --
var iAmNothing = null;
// -- NaN (Not a Number) --
var not_a_number = "e" + 2;

//JavaScript Operators
/*  Arithmetic Operators
    +       Addition
    -       Subtraction
    *       Multiplication
    /       Division
    %       Modulo
*/
/* Assignment Operators
    =       Basic Assignment
    +=      Addition Assignment
    -=      Subtraction Assignment
    *=      Multiplication Assignment
    /=      Division Assignment
    %=      Modulo Assignment
    --      decrement
    ++      increment
*/

/*  Comparison and Equivalence Operators
    ==      Equal to...
    ===     Strictly Equal to... (checks the data type as well)
    !=      Not Equal to...
    !==     Strictly Not Equal to...
    >       Greater than...
    <       Less than...
    >=      Greater than or Equal to...
    <=      Less than or Equal to...
*/
$x =2;
$y= 2.0;
//Logical Operators
/*
    &&      Logical AND
    ||      Logical OR
    !       Logical NOT
*/



//====================Input-Output=========================

// --- OUTPUTS ---

// ---- sample: document.write() with HMTL element ----
//document.write('<strong>Hello world</strong>');
// ---- sample: document.getElementId() with HTML element ----
document.getElementById("scripted").innerHTML = "<strong>Hi Pisay!</strong>";
// ---- sample: alert() ----

alert("wow");
// ---- sample: confirm() ----
//var confirmTxt = "Press button! \n Either OK or Cancel";

if (confirm("Press a Button") == true) {
    alert("You Pressed OK");
}else{ 
    alert("You Pressed cancel"); 
}
confirm("Text goes here"); //basic confirmation pop up
// ---- sample: console.log() ----
console.log("i'm hiding here");

// --- INPUT ---
// ---- sample: prompt() and alert() ----
prompt("Text to display at the prompt", 0);
var x = parseFloat(prompt("Enter the value of the first number","0"));
var y = parseFloat(prompt("Enter the value of the second number",0));
alert("The value of " +x+ " + " +y+ " = " + ( (x) + (y)));

//css
//document.getElementById("scripted").setAttribute("style","background-color: #000000;");


function despair(){
    document.getElementById("despair").setAttribute("style","background-image: url('despair.webp'); margin: 0px; padding: 0px; width: 100vw; height: 100vh;");
}