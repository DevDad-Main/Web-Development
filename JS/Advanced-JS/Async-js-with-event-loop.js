//NOTE: SYNCHRONOUS CODE
//NOTE: Runs line by line, which is just our regular standard code
console.log("Hello World");

function sayHello() {
  console.log("I Would like to say hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}

//NOTE: ASYNCHRONOUS
//NOTE: We won't do things in a sequence, we will have a pause
//NOTE: While we wait for our code to finish what its doing then it can move onto
//NOTE: The next processs
//
//NOTE: EXAMPLES ->
//Network Calls,
//Write/Read files from Disk(Memory is quick)
//Time Functions that require a certain amount of time to be executed
//e.g Above

//NOTE: Event Loop and why our code above dosen't behave as we expect
/*

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

What happens:

    "A" goes to the call stack → logs immediately.

    setTimeout(...) goes to Web API → callback added to task queue after 0ms.

    Promise.resolve() → .then(...) goes to microtask queue.

    "D" is logged (still in the call stack).

    Event loop checks:

        Call stack is empty → Runs microtask (C)

        Then moves to task queue → Runs timeout (B)

Output:
A
D
C
B



*/
