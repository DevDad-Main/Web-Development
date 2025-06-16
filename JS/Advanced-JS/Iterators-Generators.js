//NOTE: Adding the asteriks after the function makes it a
//NOTE: Generator function -> Essentially they don't execute all the code at once
//NOTE:
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();

console.log(gen); //Object [Generator] {}

//NOTE: Holds a Fucntion Definition but dosen't work?
console.log(gen()); // Returns TypeError, Gen is not a func

//NOTE: For us to call it we need to do it like so
//NOTE: It remembers each value
console.log(gen.next().value); //Returns 1
console.log(gen.next().value); //Returns 2
console.log(gen.next().value); //Returns 3

//NOTE: We have only yielded 3 times so it dosen't know
//NOTE: what to do, henc the undefined

console.log(gen.next().value); //undefined

//NOTE: .next() is an iterator.
//NOTE: It actually keeps track of the each index
//NOTE: in the arry and it keeps going onto the next value
//NOTE: until it hits the out of bounds array
//
//NOTE: * and yield are related to the generators
