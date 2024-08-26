let arr = [1,2,3,4,5]

arr.push(6)  // [ 1, 2, 3, 4, 5, 6 ] 

arr.pop()       // [ 1, 2, 3, 4 ]

arr.shift()  // deletes 1st value

arr.unshift(0)  // [ 0, 1, 2, 3, 4, 5 ]    // basically adds the value in the start

console.log(arr);





// In JavaScript, both slice() and splice() are used to manipulate arrays

- slice()
Purpose: Extracts a portion of an array without modifying the original array

const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (original array remains unchanged)



- splice()
Purpose: Adds, removes, or replaces elements in an array.

  
const arr = [1, 2, 3, 4, 5];
const splicedArr = arr.splice(1, 2, 10, 11); // [2, 3] (removed elements)
console.log(arr); // [1, 10, 11, 4, 5] (original array modified)






// for each loop using function and arrow function 

- function 
  
const coding = ["c++", "JS", "ReactJS", "JAVA"];

coding.forEach(function (val){
    console.log(val);
})


- using arrow function 

coding.forEach((val) => {
    console.log(val);
})


