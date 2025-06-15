let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  //NOTE: Allows us to access all the properties from computer
  //NOTE: Older way of defining this
  __proto__: computer,
};
let tomHardware = {};

//NOTE: .__ Called Dunder
// console.log(`Computer: `, computer.__proto__);
// console.log(`Lenovo: `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};
//NOTE: Setting the tesla to inherit the properties of the
//Generic Car
Object.setPrototypeOf(tesla, genericCar);

//NOTE: To access these properties we call like so
console.log(`Tesla Car: `, Object.getPrototypeOf(tesla));
