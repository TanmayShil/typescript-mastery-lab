// *****************************************************************************************//
// *****************************************************************************************//


// Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// Promise States:-
// 1. Pending: The initial state of the promise, neither fulfilled nor rejected.
// 2. Fulfilled: The asynchronous operation completed successfully.
// 3. Rejected: The asynchronous operation failed.

// Syntax:-
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     resolve(value);
//     reject(error);
// });

// Example 1:-
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 1000);
// });
// myPromise.then((value) => {
//     console.log(value);
// });
// myPromise.catch((error) => {
//     console.log(error);
// });
// myPromise.finally(() => {
//     console.log("Promise finally");
// });

// Example 2:-
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success:boolean = true;
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000);
//   });
// }
// fetchData()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.error("error",error);
//   });
 
// Example 3:-
// function checkLogin(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "password") {
//         resolve("Login successful!");
//       } else {
//         reject("Invalid credentials.");
//       }
//     }, 1500);
//   });
// }
// checkLogin("admin", "password")
//   .then(message => console.log(message))
//   .catch(err => console.error(err));


// Promise Methods:
// There are 4 Promise methods:
// // 1. Promise.all(iterable) - returns an array of results of all promises.
// const promise1 = Promise.resolve(10);
// const promise2 = Promise.resolve(20);
// const promise3 = Promise.resolve(30);

// const promiseAll = Promise.all([promise1, promise2, promise3]);
// promiseAll.then((result) => {
//     console.log(result);
// });
// promiseAll.catch((error) => {
//     console.log(error);
// });


// // 2. Promise.race(iterable) - returns the first promise that resolves or rejects.
// const promise4 = Promise.reject("Error");
// const promise5 = Promise.resolve(20);
// const promise6 = Promise.resolve(30);

// const promiseRace = Promise.race([promise4, promise5, promise6]);
// promiseRace.then((result) => {
//     console.log(result);
// });
// promiseRace.catch((error) => {
//     console.log(error);
// });


// // 3. Promise.any(iterable) - returns the first promise that resolves.
// const promise7 = Promise.reject("Error");
// const promise8 = Promise.resolve(20);
// const promise9 = Promise.resolve(30);

// const promiseAny = Promise.any([promise7, promise8, promise9]);
// promiseAny.then((result) => {
//     console.log(result);
// });
// promiseAny.catch((error) => {
//     console.log(error);
// });

// // 4. Promise.allSettled(iterable) - returns an array of results of all promises.
// const promise10 = Promise.reject("Error");
// const promise11 = Promise.resolve(20);
// const promise12 = Promise.resolve(30);

// const promiseAllSettled = Promise.allSettled([promise10, promise11, promise12]);
// promiseAllSettled.then((result) => {
//     console.log(result);
// });
// promiseAllSettled.catch((error) => {
//     console.log(error);
// });


//---------------------------------------------------------------------------------------------------------/

// Async and Await:-
// Async and Await in JavaScript/TypeScript is used to simplify handling asynchronous operations using promises.


// async Keyword - Used to declare an asynchronous function.
// An async function always returns a Promise. 

// const handleSubmit = async ()=>{
//     return 
// }

// await Keyword - Can only be used inside an async function. Pauses the execution of the function until the Promise is resolved or rejected. 

// async function myFunction() {
//   const result = await someAsyncFunction();
//   console.log(result);
// }


//-----------------------------------------

// try-catch block used to handle errors in async functions.
// syntax:-
// try {
//     await someAsyncFunction();
// } catch (error) {
//     console.error(error);
// }



// Example 1:-
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000);
//   });
// }

// async function processData() {
//   try {
//     console.log("Starting to fetch data...");
//     const data = await fetchData(); // Wait for the promise to resolve
//     console.log(data); // Process the data
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// processData();

// Example 2:-

// function fetchUser(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Fetching user data...");
//       resolve({ id: id, name: "Alice" });
//     }, 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Fetching posts...");
//       resolve(["Post 1", "Post 2", "Post 3"]);
//     }, 1000);
//   });
// }

// async function displayUserData() {
//   try {
//     const user = await fetchUser(1);
//     console.log(user);
    
//     const posts = await fetchPosts(user.id);
//     console.log(posts);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// displayUserData();

//---------------------------------------------xxxxxxxxxxxx-----------------------------------

//HTTP Requests in TypeScript 

// The fetch() method in JavaScript is used to make HTTP requests to a server. 
// It returns a Promise that resolves to the Response object.

// Example 1:-
// const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url)
//   .then((response) => response.json()) //json() is used to convert the response to json format.
//   .then((data) => console.log(data)) // data is the response object.
//   .catch((error) => console.error(error)); // error is the error object.

//Example 2: Using fetch with async/await
// async function fetchPosts() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
// fetchPosts();

// HTTP Methods - 
// // 1. GET - Used to retrieve data from a server.
// Example - 
// async function getData():Promise<any> {
//     try{
//   const response:Response = await fetch('https://jsonplaceholder.typicode.com/posts'); // fetching data from the server.
//   const data:any = await response.json(); // converting the response to json format.
//   console.log(data); // printing the response.
//     }
//     catch(error: unknown){
//         console.log(error);
//     }
// }
// getData(); // calling the function.


// // 2. POST - Used to send data to a server.
//Example - 
// async function postData():Promise<any> {
//     try{
//   const response:Response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({ // converting the data to json format. because 
//         title:'foo',
//         body:'bar',
//         userId:1
//     })
//   });
//   const data:any = await response.json(); // converting the response to json format.
//   console.log(data); // printing the response.
//     }
//     catch(error: unknown){
//         console.log(error);
//     }
// }
// postData(); // calling the function.


// // 3. PUT - Used to update data on a server.
//Example - 
// async function putData():Promise<any> {
//     try{
//   const response:Response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         id:1,
//         title:'foo',
//         body:'bar',
//         userId:1
//     })
//   });
//   const data:any = await response.json(); // converting the response to json format.
//   console.log(data); // printing the response.
//     }
//     catch(error: unknown){
//         console.log(error);
//     }
// }
// putData(); // calling the function.


// // 4. DELETE - Used to delete data from a server.
//Example - 
// async function deleteData():Promise<any> {
//     try{
//   const response:Response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'DELETE',
//   });
//   const data:any = await response.json(); // converting the response to json format.
//   console.log(data); // printing the response.
//     }
//     catch(error: unknown){
//         console.log(error);
//     }
// }
// deleteData(); // calling the function.




// Problem set:-

// 1. Create a function that returns a promise which resolves after 2 seconds with a success message.

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 2000);
//   });
// }
// fetchData().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.error(error);
// });

// 2. Write an async function that uses fetch() to get data from a given API URL and logs the data to the console.

// function fetchData():Promise<any> {
// async function fetchData():Promise<any> {
//     try{
//   const response:Response = await fetch('https://jsonplaceholder.typicode.com/posts'); // fetching data from the server.
//   const data:any = await response.json(); // converting the response to json format.
//   console.log(data); // printing the response.
//     }
//     catch(error: unknown){
//         console.log(error);
//     }
// }
// fetchData(); // calling the function.



