// function makeTea(typeOfTea) {
//   return `Making ${typeOfTea}`;
// }
//
// let teaOrder = makeTea("green tea");
// console.log(orderTea);
//
// function orderTea(teaType) {
//   function confirmOrder() {
//     return `Order confirmed for ${teaType}`;
//   }
//
//   return confirmOrder();
// }
//
// // console.log(orderTea("Chai"));
//
// //NOTE: Arrow Function
//
// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };
//
// //NOTE: Or we can do this way, Implicit Return
// // const calculateTotal = (price, quantity) => price * quantity;
// let totalCost = calculateTotal(10, 3);
// console.log(totalCost);
//
// function makeTea(typeOfTea) {
//   return `Make tea: ${typeOfTea}`;
// }
//
// function processTeaOrder(teaFunction) {
//   return teaFunction("earl grey");
// }
//
// let order = processTeaOrder(makeTea);
// console.log(order);
//
// //NOTE: Example of a Closure function
// /*
// A closure is a function that "remembers" the variables from
// its outer lexical scope even after the outer function has finished executing.
// */
// function createTeaMaker(name) {
//   let score = 100;
//   return function (teaType) {
//     return `Making ${teaType} ${name} ${score}`;
//   };
// }
//
//
