
// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.



function outerfunction(){
    let outervariable = 'i am outer variable';

    function innerfunction(){
        console.log(outervariable); // innerFunction has access to outerVariable
    }
    return innerfunction; // Call outerFunction to get innerFunction
}

let inner = outerfunction();

inner();  // Call innerFunction
inner();
inner();

// output "I am from outerFunction"
