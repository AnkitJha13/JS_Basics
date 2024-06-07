# Currying
- if we have a function which takes multiple arguments , we can break them down into a series 
  of function which takes one arguments each.



--> normal function

function add(a, b) {
    return a + b;
}

const a = add(1,2)

console.log(a);








---> currying function


function add(a) {
    return function(b) {
      return a + b;
    }
}

console.log(add(2)(3))
