// for-each loop sirf array par chalta hai
// for-each by default original array mai changes nhi karta hai aur temporary copy mai karta hai bss

let a = [1,2,3,4,5]

a.forEach(function(val) {   // output - 3,4,5,6,7
    console.log(val+2);
});
console.log(a);  // [1,2,3,4,5]   // for-each makes changes in temporary copy








// for-in loop hota hai objects par loop karne ke liye

let obj = {
    name : "athena",
    age : 69,
    city : "bangalore"
}

// for(let key in obj){       
//     console.log(key);
// }

//output
// name
// age
// city    





// for(let key in obj){       
//     console.log(obj[key]);
// }

//output
// athena
// 69
// bangalore






// for(let key in obj){       
//     console.log(key , obj[key]);
// }

//output
// name athena
// age 69
// city bangalore



