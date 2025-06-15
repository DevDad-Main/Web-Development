//NOTE: Closures are functions
//NOTE: The remember the environment in which they were created
//NOTE: This means that the function can retain the variables which are
//NOTE: defined outside of it

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

//NOTE: If any function is created inside another function and reutrned
//NOTE: It actually retains the memory of the function.
//NOTE: This is why we can assign it to our variable and then
//NOTE: Call it like a function and each time we call it
//NOTE: It will ironically increment the counter variable
//NOTE: Held inside
let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

//NOTE: Closures for Private Variables
function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const myAccount = createBankAccount();
console.log(myAccount.deposit(100)); // 100
console.log(myAccount.withdraw(30)); // 70
console.log(myAccount.getBalance()); // 70
