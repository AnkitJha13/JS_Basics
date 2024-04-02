// Higher order function are those functions which accept the function as a parameter or return a function or both 


// for-each is a higher order function 


let a = [1,2,3,4,5]

a.forEach(function(val) {   // output - 3,4,5,6,7
    console.log(val+2);
});
console.log(a);  // [1,2,3,4,5]   // for-each makes changes in temporary copy

// here forEach is a function in which which is accepting function as a parameter here 






// Higher order functions are used in many places like in setTimeout , setInterval , map , filter , reduce   as all these are functions itself and a function is passed inside them 
// as a parameter 

// also used when we make closures 
