//NOTE: Used with the newwer convention of importing
export function add(a, b) {
  return a + b;
}

//NOTE: Used with the newwer convention of importing
export function subtract(a, b) {
  return a - b;
}

//NOTE: Used with the newwer convention of importing
export default function multiply(a, b) {
  return a * b;
}

//NOTE: Named exports used with CommonJS -> Older convention
//NOTE: Some npm packages still use this way.
//NOTE: To change this we can go into the package.json and change it there

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

//NOTE: Even if we only have one function to export it is still
//NOTE: defined as exports

module.exports = {
  add,
  subtract,
  multiply,
};
