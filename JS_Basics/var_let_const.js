
const a = 5;  // const values cannot be changed



// In ES5 only  var was developed
// In ES6 2 more was present   let and const was developed



{ 
  let x = 2;   // let is block scope
}
// x can NOT be used here


{
  var x = 2;   //var is global scope 
}
// x CAN be used here




var // is hoisted.
let // not hoisted




var x = 10;
// Here x is 10

{
var x = 2;   // due to global scope
// Here x is 2
}

// Here x is 2





let x = 10;
// Here x is 10

{
let x = 2;       // due to block scope
// Here x is 2
}

// Here x is 10
