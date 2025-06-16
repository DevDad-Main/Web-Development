//NOTE: Rate Limiter -> Only allows this to be called and then has
//NOTE: to wait before it can be called again, like a timer or cooldown

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}

//NOTE: Real world case could be like so
//NOTE: Not allowing someone to spam a button loads of times and
//NOTE: Sending loads of unnecessary API calls or whatever else it is

function sendMessage(msg) {
  console.log("Message sent:", msg);
}

const limitedSend = rateLimiter(sendMessage, 2000);

limitedSend("Hi!"); // ✅ "Message sent: Hi!"
limitedSend("Again!"); // ❌ "Rate limit exceeded" (if within 2 sec)

//NOTE: This (...args) we know makes a hard copy of a list
//NOTE: But what this actually does is Captures all arguments passed into this
//NOTE: Function as an array called args
//NOTE: EXAMPLE:

function greet(name) {
  return `Hello, ${name}`;
}

const wrappedGreet = function (...args) {
  console.log("Calling greet...");
  return greet(...args);
};

console.log(wrappedGreet("Alex"));
// Output:
// Calling greet...
// Hello, Alex
