// *****************************************************************************************//
// *****************************************************************************************//

// Import and Export:
// Import is used to import modules from other files.
// Export is used to export modules from one file to other files.

// 1. Named Exports:
// Named exports are exported using the export keyword followed by the variable, function, or class name.
// Example - 
// export const name:string = "John";
// export function add(a:number, b:number):number {
//     return a + b;
// }
// export class Person {
//     name:string;
//     age:number;
//     constructor(name:string, age:number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// 2. Default Exports:
// Default exports are exported using the export default keyword.
// Example - 
// export default class Person {
//     name:string;
//     age:number;
//     constructor(name:string, age:number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// 3. Importing All Named Exports:
// All named exports are imported using the import * as keyword.
// Example - 
// import * as module from "./module.js";
// console.log(module.name);
// console.log(module.add(1, 2));
// console.log(module.Person);

// 4. Import:
// Import is used to import modules from other files.
// Example - 
// import { name, add, Person } from "./module.js";

// 5. Import default export:
// Default export is imported using the import keyword.
// Example - 
// import Person from "./module.js";

// ---------------------------------------------xxxxxxxxxxxxx---------------------

// Web Storage:
// Web storage is a way to store data in the browser.
// There are two types of web storage:
// 1. Local Storage:
// Local storage is used to store data in the browser.
// Local storage is stored in the browser even after the browser is closed.
// Local storage is stored in the browser even after the page is refreshed.
// Example - 
// localStorage.setItem("name", "John");
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

// 2. Session Storage:
// Session storage is used to store data in the browser.
// Session storage is stored in the browser only during the session.
// Session storage is not stored in the browser after the session is closed.
// Session storage is not stored in the browser after the page is refreshed.
// Example - 
// sessionStorage.setItem("name", "John");
// sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.clear();


//difference between local storage and session storage:
// Local Storage:-
// Local storage is stored in the browser even after the browser is closed.
// Local storage is stored in the browser even after the page is refreshed.
// Local storage is stored in the browser even after the browser is closed.
// Local storage is stored in the browser even after the page is refreshed.

// Session Storage:-
// Session storage is stored in the browser only during the session.
// Session storage is not stored in the browser after the session is closed.
// Session storage is not stored in the browser after the page is refreshed.
// Session storage is not stored in the browser even after the browser is closed.

//Problem Set:-
// 1. Write a function that takes a key and a value and stores it in local storage.
// Solution:-
// function setLocalStorage(key:string, value:string):void {
//     localStorage.setItem(key, value);
// }
// setLocalStorage("name", "John");

// 2. Write a function that takes a key and returns the value from local storage.
// Solution:-
// function getLocalStorage(key:string):string {
//     return localStorage.getItem(key) as string;
// }
// console.log(getLocalStorage("name"));

// 3. Write a function that takes a key and a value and stores it in session storage.
// Solution:-
// function setSessionStorage(key:string, value:string):void {
//     sessionStorage.setItem(key, value);
// }
// setSessionStorage("name", "John");

// 4. Write a function that takes a key and returns the value from session storage.
// Solution:-
// function getSessionStorage(key:string):string {
//     return sessionStorage.getItem(key) as string;
// }
// console.log(getSessionStorage("name"));

// 5. Write a function that takes a key and a value and stores it in local storage with a specific expiry time.
// Solution:-
// function setLocalStorageWithExpiry(key:string, value:string, expiry:number):void {
//     const data = {
//         value: value,
//         expiry: Date.now() + expiry
//     };
//     localStorage.setItem(key, JSON.stringify(data));
// }
// setLocalStorageWithExpiry("name", "John", 10000);


// ---------------------------------------------xxxxxxxxxxxxx---------------------

//Cookies:
// Cookies are used to store data in the browser.
// Cookies are stored in the browser even after the browser is closed.
// Cookies are stored in the browser even after the page is refreshed.
// Cookies are stored in the browser even after the browser is closed.
// Cookies are stored in the browser even after the page is refreshed.
// Example - 
// document.cookie = "name=John";
// document.cookie = "name=John; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";

//Difference between localStorage, sessionStorage and cookies:
// Local Storage:-
// Local storage is stored in the browser even after the browser is closed.
// Local storage is stored in the browser even after the page is refreshed.
// Local storage is stored in the browser even after the browser is closed.
// Local storage is stored in the browser even after the page is refreshed.

// Session Storage:-
// Session storage is stored in the browser only during the session.
// Session storage is not stored in the browser after the session is closed.
// Session storage is not stored in the browser after the page is refreshed.
// Session storage is not stored in the browser even after the browser is closed.

// Cookies:-
// Cookies are stored in the browser even after the browser is closed.
// Cookies are stored in the browser even after the page is refreshed.
// Cookies are stored in the browser even after the browser is closed.
// Cookies are stored in the browser even after the page is refreshed.

// ---------------------------------------------xxxxxxxxxxxxx---------------------

//Problem Set:-
// 1. Write a function that takes a key and a value and stores it in a cookie.
// Solution:-
// function setCookie(key:string, value:string):void {
//     document.cookie = `${key}=${value}`;
// }
// setCookie("name", "John");

// 2. Write a function that takes a key and returns the value from a cookie.
// Solution:-
// function getCookie(key:string):string {
//     return document.cookie.split(";").find((cookie) => cookie.startsWith(`${key}=`))?.split("=")[1] as string;
// }
// console.log(getCookie("name"));

// 3. Write a function that takes a key and a value and stores it in a cookie with a specific expiry time.
// Solution:-
// function setCookieWithExpiry(key:string, value:string, expiry:number):void {
//     const data = {
//         value: value,
//         expiry: Date.now() + expiry
//     };
//     document.cookie = `${key}=${JSON.stringify(data)}`;
// }
// setCookieWithExpiry("name", "John", 10000);

// ---------------------------------------------xxxxxxxxxxxxx---------------------

//Give some senrious in which time used localStorage and sessionStorage and cookies:
// localStorage:-
// User preferences
// User settings
// Remember me functionality
// Store large amounts of data

// Session Storage:-
// User session
// Shopping cart data
// Form data
// Temporary data

// Cookies:-
// Authentication
// Session management
// Tracking
// Personalization

// *****************************************************************************************//
// *****************************************************************************************//