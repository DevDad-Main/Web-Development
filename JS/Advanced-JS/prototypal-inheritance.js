//NOTE: Prototypal Inheritance

//NOTE: Constructor Functions and Prototypes
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is ", this.name);
};

let olly = new Person("Olly");

//NOTE: Here the greet message and fucntion call is not inside
//NOTE: Of the Olly object, but in the Person.prototype it self
//NOTE: Whcih is linked via the prototype chain
olly.greet();

//NOTE: Simple Prototypal Inheritance
const vehicle = {
  wheels: 4,
  start() {
    return "Vehicle started";
  },
};

const car = {
  brand: "Tesla",
};

// Inherit from vehicle
Object.setPrototypeOf(car, vehicle);

console.log(car.brand); // "Tesla" (own property)
console.log(car.wheels); // 4 (inherited)
console.log(car.start()); // "Vehicle started" (inherited method)

//NOTE: Class Syntax (Under the hood still prototypal)

class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

const myDog = new Dog();
console.log(myDog.speak()); // "Woof!"
/*
  myDog
    ↓
  Dog.prototype
    ↓
  Animal.prototype
    ↓
  Object.prototype
    ↓
null
*/
