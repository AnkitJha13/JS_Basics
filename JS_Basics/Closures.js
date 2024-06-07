
// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.



// Define a function named outerFunction
function outerFunction() {
    // Declare a variable in the outer function's scope
    let outerVariable = 'I am from outerFunction';

    // Define an inner function within outerFunction
    function innerFunction() {
        // innerFunction can access outerVariable because of closure
        console.log(outerVariable);
    }

    // Return the innerFunction from outerFunction
    return innerFunction;
}


// Call outerFunction and store the returned innerFunction in a variable
let inner = outerFunction();


// Call the innerFunction stored in inner
inner(); // Output: "I am from outerFunction"
inner(); // Output: "I am from outerFunction"
inner(); // Output: "I am from outerFunction"

