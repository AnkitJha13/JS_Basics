// Constructor functions are used to create objects in javascript.
  
// If we want to create multiple objects having similar properties and methods,
// constructor functions are used.



function Person(name, age, gender) {
  this.name = name;
  this.age = age;         
  this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");     // output - Person { name: 'Vivek', age: 76, gender: 'male' }
console.log(person1);


var person2 = new Person("Courtney", 34, "female");  // output - Person { name: 'Courtney', age: 34, gender: 'female' }
console.log(person2);


