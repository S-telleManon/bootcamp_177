const resolvedPromise = Promise.resolve(3);

resolvedPromise
  .then(value => console.log("Resolved with:", value))
  .catch(error => console.log("Rejected:", error));

  const rejectedPromise = Promise.reject("Boo!");

rejectedPromise
  .then(value => console.log("Resolved with:", value))
  .catch(error => console.log("Rejected with:", error));