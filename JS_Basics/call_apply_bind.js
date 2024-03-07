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
