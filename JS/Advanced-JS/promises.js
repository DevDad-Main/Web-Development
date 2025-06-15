//NOTE: Promises

//NOTE: Promise Creation
function fetchdata() {
  //NOTE: Promise returns a callback
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

//NOTE: Promise Consumption

//NOTE: This wont actually return anything for us to see
//NOTE: Promises have three states:
/*
    Pending: Initial state, neither fulfilled nor rejected.
    Fulfilled: Meaning that the operationw as completed succesffuly
    Rejected: Meaning that the opration failed
 */
// let response = fetchdata();
// console.log(response);

fetchdata()
  //NOTE: .then used to catch the successful data
  //NOTE: Allowus us to perform whatever we need on it
  //NOTE: We can also chain mutliple .then().then() together
  .then((data) => console.log(data))
  //NOTE: Catches the errors of rejected state/data we wanted to process
  .catch((error) => console.error(error));

//NOTE: Example of promises with gathering data from an api
fetch("https://api.example.com/user")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
