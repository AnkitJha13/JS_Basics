// Higher order function are those functions which accept the function as a parameter or return a function or both 


// for-each is a higher order function 


let a = [1, 2, 3, 4, 5];

function mamba(val) {
    console.log(val + 2);  // output - 3,4,5,6,7
                           // this value will not print anything as the function is not called 
}

a.forEach(mamba); // This will call mamba for each element in the array, producing output
                  // This is using a higher-order function
                  // 3,4,5,6,7

console.log(a);  // output - 1,2,3,4,5
                 // giving the output of original array itself

// here forEach is a function in which which is accepting function as a parameter here 






// Higher order functions are used in many places like in setTimeout , setInterval , map , filter , reduce   as all these are functions itself and a function is passed inside them 
// as a parameter 

// also used when we make closures 
