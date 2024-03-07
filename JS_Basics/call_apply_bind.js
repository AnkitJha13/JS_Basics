call
- It’s a predefined method in javascript.
- call() method allows an object to use the method (function) of another object.

function abd() {
  console.log(this.name);
}

var obj = {
  name: "athena"
}

abd.call(obj)        // athena
  







apply
- The apply method is similar to the call() method
- call() method takes arguments separately whereas, apply() method takes arguments as an array.




function abd(message1, message2, message3) {
    console.log(this, message1, message2, message3);
}

var obj = {
    name: "athena"
}

abd.apply(obj, ["mamba", "athena", "virat"])        // {name: 'athena'} 'mamba' 'athena' 'virat'










bind
- Bind is similar to call just that the it doesn't calls the function straightway but return the function to call it 
  later whenever we want



function abd() {
    console.log(this);
}

var obj = {
    name: "athena",
    age: 24
}

var newfunc = abd.bind(obj)      // yaha tak ka output nhi aayega jo newfunc mai stored hai usse jitne baar call karenge utne baar output dikhega 
 
newfunc()          // {name: 'athena', age: 24}
newfunc()          // {name: 'athena', age: 24}





