//hoisting
//variables and functions are hoisted which means their declaration is moved on the top of the code

// basically we can print without the declaration   and is only possible in case of var



console.log(a)        // printing without the declaration of a
var a = 5;            // undefined

let a = 5;           // agar let use karte to error aata 




a = 5;
console.log(a);      // output is 5
var a;               //not in case of let




//To avoid hoisting use "use strict" on top of javascript

"use strict";
x = 5; // Gives an error since 'x' is not declared
var x;
