// map:-
It applies a given function on all the elements of the array and returns the updated array

let num = [1,2,3,4,5]
let ans = num.map(function(value) {
    return value*3;
})

console.log(ans);  // output - [3,6,9,12,15]






// filter:-
It filters the elements of the array for the applied condition and returns the array which contains elements that satisfy the applied condition. 

let num = [1,2,3,4,5,6,7,8]
let ans = num.filter(function(value) {
    return value>3;
})


=> using arrow function 

let num = [1,2,3,4,5,6,7,8]
let ans = num.filter((value) => {
    return value>3;
})


console.log(ans);  // output - [4,5,6,7,8]








// reduce:-
It reduces all the elements of the array to a single value by repeatedly applying a function


let num = [1, 2, 3, 4, 5]
let ans = num.reduce((acc, val) => {
    return acc = acc + val;
},0)

console.log(ans);











=> to see each step sum 
let num = [1, 2, 3, 4, 5]
let ans = num.reduce((acc, val) => {
    console.log(`acc is ${acc} and val is ${val}`)
    return acc = acc + val;
},0)

console.log(ans);
