- Promises are used to handle asynchronous operations in javascript.

- A promise is created using the Promise constructor which takes in a callback function with
  two parameters, resolve and reject respectively.


  
- resolve is a function that will be called when the async operation has been
  successfully completed.
- reject is a function that will be called, when the async operation fails or if some error
  occurs


- then() method is used to access the result when the promise is fulfilled.
- catch() method is used to access the result/error when the promise is rejected.



    
ex- 
var ans = new Promise((res, rej) => {
    if (true) {
        return res();
    }
    else {
        return rej();
    }
})

ans
    .then(function () {
        console.log("resolve hogyaa");     // agar if mai true hoga to then chalega
    })
    .catch(function () {
        console.log("reject hogyaa");      // agar if mai false hoga to catch chalega
    })
