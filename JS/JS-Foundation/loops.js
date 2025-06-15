////NOTE: While loop
//let sum = 0;
//let i = 0;
//while (i <= 5) {
//  sum += i;
//  i++;
//}

// console.log(sum);

//NOTE: count down
//
// let sum = 0;
// let i = 5;
// let countdown = [];
//
// while (i > 0) {
//   countdown.push(i);
//   i--;
// }
//
// console.log(countdown);
//
// let teaCollection = [];
// let userInput;
//
// do {
//   userInput = prompt(`Enter your favourite tea (type "stop" to finish)`);
//
//   if (userInput !== "stop") {
//     teaCollection.push(userInput);
//   }
// } while (userInput !== "stop");
//
// let total = 0;
// let k = 1;
// do {
//   total += k;
//   k++;
// } while (k <= 3);
//
// console.log(total);
//
// let numbers = [2, 4, 6];
// let multipliedNumbers = [];
//
// for (i = 0; i < numbers.length; i++) {
//   let number = numbers[i] * 2;
//   // multipliedNumbers.push(number);
//   multipliedNumbers.push(numbers[i] * 2);
// }
//
// console.log(multipliedNumbers);
//
// let cities = ["Paris", "New York", "Tokyo", "London"];
// let cityList = [];
//
// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
//
//   cityList.push(cities[i]);
// }

// console.log(cityList);
/* 
let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const index of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
 */
//
// let teas = ["chai", "green tea", "herbal tea"];
// let preferredTeas = [];
//
// for (const tea of teas) {
//   if (tea === "herbal tea") continue;
//   preferredTeas.push(tea);
// }
//
//NOTE: For in loop
//
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};

//NOTE: Returns an array with the keys as elements
console.log(Object.keys(citiesPopulation));
//NOTE: Returns an Array with the values as elements
console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  //NOTE: Prints all the citynames or keys
  console.log(city);
  //NOTE: Returns the values of each city
  console.log(citiesPopulation[city]);
  //NOTE: This will return a copy and paste of the original object

  if (city === "Berlin") {
    break;
  }

  cityNewPopulations[city] = citiesPopulation[city];
}

console.log(cityNewPopulations);
