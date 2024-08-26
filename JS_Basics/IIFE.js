// Immediately invoked function (IIFE)
// It is a function that runs as soon as it is defined.


(function(){
    console.log("game over buddy");
})();

// output is --> game over buddy


// named IIFE

(function athena(){
    console.log("game over buddy");
})();



// without named IIFE

( (name) => {
    console.log(`game over buddy ${name}`);
})("athena")






// uses
// Avoid Polluting the Global Scope

// Without IIFE

var x = 10;

function sayHello() {
    console.log("Hello!");
}

console.log(x); // 10
sayHello(); // Hello!

// Another script might overwrite x or sayHello
var x = 20;
function sayHello() {
    console.log("Hi!");
}

console.log(x); // 20
sayHello(); // Hi!



// With IIFE


(function() {
    var x = 10;

    function sayHello() {
        console.log("Hello!");
    }

    console.log(x); // 10
    sayHello(); // Hello!
})();

// x and sayHello are not accessible outside the IIFE
console.log(typeof x); // undefined
console.log(typeof sayHello); // undefined
