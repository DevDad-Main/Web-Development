//NOTE: Creating a constructor
//NOTE: There is not really any best way to tell
//What is a finction or constructor, just best practices to follow
//
//NOTE: By concvention is starts with a Capital Letter
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("BMW", "MSeries");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea);
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

//NOTE: Errors
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("Tesa");

let coffee = Drink("Coffee");
