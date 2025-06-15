//NOTE: THIS and binding context to it

const person = {
  name: "Olly",
  greet() {
    console.log("Hello, i am", this.name);
  },
};

//NOTE: Executing the person reference directly has the context.
person.greet(); // Hello, i am Olly

//NOTE: Not executing the function,
//      but transfering the reference onto another variable
//      The context is actually lost.
const greetFunction = person.greet; // Hello, i am undefined
//NOTE: So as soon as we transfer this from one variable another then the context is lost;
greetFunction();

//NOTE: Now we are binding the new variable
/*
For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

*/
const boundGreet = person.greet.bind({ name: "Marta" });
boundGreet();

//NOTE: Bind, Call and Apply

//NOTE:
//Method	What It Does	When to Use
//bind()	Returns a new function with this bound	Use when you want to call it later
//call()	Immediately invokes the function with this	Use when calling with args (comma-separated)
//apply()	Same as call(), but args are in an array	Use when calling with array of args
