
# Prototype is a fundamental concept that allows objects to inherit properties and methods from other objects.




var Human = {
    age: 19,
    canwalk: "true",
    cantalk: "true"
}

var abd = {
    name: "athena"
}

abd.__proto__ = Human

console.log(abd.name);
console.log(abd.age);
console.log(abd.canwalk);
console.log(abd.cantalk);







## MORE preferred   (as directly using __proto__ can lead to performance issues)



var Human = {
    age: 19,
    canwalk: "true",
    cantalk: "true"
}

var abd = Object.create(Human)

abd.name = "athena"


console.log(abd.name);
console.log(abd.age);
console.log(abd.canwalk);
console.log(abd.cantalk);
