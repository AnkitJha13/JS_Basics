call
- It’s a predefined method in javascript.
- call() method allows an object to use the method (function) of another object.

function abd() {
  console.log(this.name);
}

var obj = {
  name: "athena"
}

abd.call(obj)







apply
