//NOTE: Making Objects that are instances of classes

//NOTE: Hard for us to make copies of this object
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got created in ${this.year}`;
  },
};

// console.log(car.start());

//NOTE: Constructors for easily making new instances
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 25);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

//NOTE: Added a new method that any and all arrays can access
Array.prototype.olly = () => {
  return `Custom Method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.olly());

//NOTE: CLASSES
//

//NOTE: All functions declared inside a class are
//NOTE: called methods, this is why we dont declare the function keyword
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

//NOTE: Inheritance
//NOTE: We can add more extensions by adding a comma,
//NOTE: super(...) calls the parent constructor.
//NOTE: You must call super(...) before using this in a subclass.
//NOTE: This does not override the parent constructor; it extends it with your custom logic.

class Car extends Vehicle {
  //NOTE: Constructor is optional, we still inherit the Vehicles Constructor

  //NOTE: Drive Method
  drive() {
    return `${this.make} : This is an Inheritance example`;
  }
}

//NOTE: Objects are created exactly the same

let myCar = new Car("Toyota", "Yaris");
// console.log(myCar.start());
// console.log(myCar.drive());
let veh1 = new Vehicle("Toyota", "Yaris");
// console.log(veh1.make);
//
//NOTE: Encapsulation

class BankAccount {
  //NOTE: This restricts use from outside.
  //NOTE: If someone wants to access it we make a getter or setter
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  //NOTE: Private Balance varible getter
  getBalance() {
    return `$${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());
// console.log(account);

//NOTE: Abstraction
//NOTE: Hides the complex implementation details
//NOTE: Dosent show off the things behind the scenes

class CoffeeMachine {
  start() {
    //NOTE: Abstraction dosent care about all the bits and bobs
    //Just want to get a return value of starting the machine e.g
    //Call Database
    //Filter Values
    return `Starting Coffee Machine...`;
  }

  makeCoffee() {
    //Complex calculation
    return `Making coffee..`;
  }

  //NOTE: Taking the abstraction even further
  pressStartButton() {
    //NOTE: Will return undefined as we havent captured the output in a variable
    let startMsg = this.start();
    let makeMsg = this.makeCoffee();
    return `${startMsg} \n${makeMsg}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.makeCoffee());
console.log(myMachine.pressStartButton());

//NOTE: Polymorphism
//NOTE: It Describes the ability of something to have or to be displayed in more than one form
//NOTE: The Different forms arise because these entities can be assigned different meanings and use in various
//NOTE: Ways of multiple contexts

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins Can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//NOTE: Statics
//NOTE: Can only be called by the class it self.
//NOTE: Can't make instances of it

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
//NOTE: Not allowed to use this by calling an object. Won't work
//NOTE: If it didn't have the static keywordt his woud work
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

//NOTE: Getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    //NOTE: To control null values or errors when we create a new object and before
    //NOTE: We use our getters or setters we can do some null checks straight in the constructor
    if (salary < 0) {
      throw new Error("Salary can not be a negative value");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value < 0) console.error("Invalid Salary");
    else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Marta", -50000);
// console.log(emp.salary);
// emp.salary = -60000;

//NOTE: Using prototype chaining
function Animal() {}

Animal.prototype.speak = function () {
  return "Animal speaking";
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return "Woof!";
};

Dog.prototype.constructor = Dog;

//NOTE: Functional Constructor with error handling

function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `"Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return "The vehicle is moving";
  }

  isVehicle(obj) {
    return obj === Vehicle ? true : false;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }

  move() {
    return "The car is driving";
  }
}
