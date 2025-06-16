function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Olly", url: "https://olly.com" });
    }, 3000); //ms
  });
}

//NOTE: Normal way of retriveing data and handling errors etc
fetchUserData().then().catch();

//NOTE: They're keywords that work together to handle
//NOTE: asynchronous operations more cleanly than using .then() and .catch().
//NOTE: Async makes a function alwasyr eturn a Promise
//NOTE: await pauses the function until the Promise resolves,
//NOTE: Then givving you the resolved data.
//NOTE: Async might not always return the data so we catch it in try catch blocks

async function getUserData() {
  try {
    console.log("Fetching User Data...");
    let userData = await fetchUserData();
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Error Fetching Data", error);
  }
}

// getUserData();

//NOTE: Promise All -> Fetching multiple promises
function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000);
  });
}

//NOTE: Promise.all() is a method that takes multiple promises and:

//NOTE:    Waits until all of them resolve.

//NOTE:    Returns a single promise that resolves to an array of all results.

//NOTE:    If any one fails, it rejects immediately with that error.

async function getBlogData() {
  try {
    console.log("Fetching blog data");

    //NOTE: Instead of having multiple awaits for each request.
    //NOTE: We can use a promise all to handle it.
    // const postData = await fetchPostData(); // Waits 2 seconds
    // const commentData = await fetchCommentData(); // Waits 3 seconds
    //NOTE: Total time of 5 seconds

    const [postData, commentData] = await Promise.all([
      fetchPostData(), // Starts immediately
      fetchCommentData(), // Starts immediately
    ]);
    //NOTE: Total time: 3 seconds ( whichever is longest )

    console.log(postData);
    console.log(commentData);

    console.log("Fetch complete");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
