
const a = 5;  // const values cannot be changed

{ 
  let x = 2;   // block scope
}
// x can NOT be used here


{
  var x = 2;   // global scope 
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
