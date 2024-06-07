rest
- Basically to collect all the remaining arguments into a single array.

function abd(a,b,c,...d){
    console.log(a,b,c, d);  // in d all elements will be stored in form of array
}

abd(1,2,3,4,5,6,7,8);            // output is 1,2,3,[4,5,6,7,8]










spread :-
- Basically we can use this opearator here to copy the values of other variabels.
- Changes made to one array won't affect the other.

// If I don't use spread this will happen  
let a = [1, 2, 3, 4, 5, 6, 7, 8];

// Assigning 'a' to 'b', both point to the same array object
let b = a;      // this means b is also referring to a and has not created any new copy and changes will be affected in both 

// Modifying 'b' will also affect 'a'
b.push(9);

console.log(a); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(b); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]






// Now using the same ex with spread operator
let a = [1, 2, 3, 4, 5, 6, 7, 8];

let b = [...a];      // this means b makes the copy of a now  

b.push(9);

console.log(a); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(b); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]








// better example here
let a = [1,2,3,4,5]
let b = [6,7,8,9,10]

let c = [...a,...b]

console.log(c)    // Output : [1,2,3,4,5,6,7,8,9,10]
