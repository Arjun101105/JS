const promise_one = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promise_one.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async two resolved");
});

const promise_three = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "arjun_nair05", email: "arjun@microsoft.com" });
  }, 1000);
});

promise_three.then(function (user) {
  console.log(user);
});

promise_four = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "arjun_nair05", email: "arjun@microsoft.com" });
    } else {
      reject("ERROR: something went wrong!");
    }
  }, 1000);
});

promise_four
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promise_five = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "Rohini", Insta: "BLOCKED" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const resp = await promise_five;
    console.log(resp);
  } catch {
    console.log("ERROR")
  }
}

consumedPromiseFive();
