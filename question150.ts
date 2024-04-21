//  Describe how asynchronous callbacks differ from synchronous code execution.


//Synchronous Example:
console.log("Before synchronous operation");

for (let i = 0; i < 1e9; i++) {} 
console.log("After synchronous operation");

// Asynchronous Example:
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");