/*
Global Actions Sheet

  Author:   Nicolas M. Pardo
  Date:     03 - 31 - 2017
  Project:  RedNaJava

*/

/* Data Kind */
console.log(1 + 2); //Number
console.log("1 + 2"); //String
console.log("1" + "2"); //Join String
//console.log(aguacate); //Function



/* POP UP */


confirm("Seguro?"); // Yes - No
prompt("Fecha de nacimiento"); // Text

/* String functions*/

console.log("Aguacate".length);
console.log("Aguacate".substring(3, 7));


/* Comparative */
console.log(3 > 2); //More than
console.log(3 >= 2); //More than
console.log(3 < 2); //Less than
console.log(3 <= 2); //Less than
console.log(3 === 2); //Equals to
console.log(3 !== 2); //Not equals than

/* Conditional */

if (3 > 2) {
    console.log("That's obvious!");
} else if (3 === 2) {
    console.log("No they're not!");
} else {
    console.log("I'm an else");
}

// Basic Var

var hola = "Hola como estás?";
console.log(hola);

/* Functions */

function FunctionName(parameter) {
    //When called do something
    return parameter;
}

//Call a function
console.log(FunctionName("casa"))

// Var storing a function
var timesTwo = function (number) {
    return number * 2;
};

var newNumber = timesTwo(3);
console.log(newNumber);
