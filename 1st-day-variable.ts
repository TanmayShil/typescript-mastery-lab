// TypeScript isn’t needy—it doesn’t need you to spell everything out 😉. Give it a value, and it figures out the type on its own ✨

// Explicit 👇
// `let username: string = "Alice";`

// Inferred ⚡
// `let age = 25; // TypeScript already knows it's a number 🔢`
// ------------------------------------------xxxxxxxx--------------------------------------------


// ###let vs. const (Immutability)
// let: Use for variables that will change. TypeScript will allow reassignment as long as the type remains the same.

// const: Use for constants. TypeScript uses "Literal Types" here. For example, const role = "admin" isn't just a string; its type is specifically "admin".
// -----------------------------------------------------------------------------

// ###Scope Levels
// 1. Global Scope: Declared outside any function or block. Accessible everywhere.
// 2. Function Scope: Variables declared with var (rarely used now) are scoped to the function.
// 3. Block Scope ({ }): Variables declared with let and const stay inside the curly braces (if-statements, for-loops, etc.).


// ------------------------------------------xxxxxxxx--------------------------------------------

// TypeScript isn’t just about types—it’s about defining the *shape of your data* 🧩. Master the basics, objects, and special types, and you control the structure of your entire app 🚀


// *************************************************------------***************************
// run ts file - 
// npm install -g typescript          // install type script compiler 
// npm install -g tsx               // run ts file directly 
// tsx 1st-day-variable.ts          // run ts file 
// *************************************************------------***************************



// ###1.Primitive Types (The Essentials)
// These are the building blocks of any logic.

// a. string: Textual data ("Hello", 'World', `Template`)
// b. number: All numeric values, including integers, floats, and hex (10, 3.14, 0xf00d).
// c. boolean: Truth values (true, false).
// d. null & undefined: Represent absence of value.
// e. bigint: For very large integers (e.g., 100n).
// f. symbol: Unique identifiers.

// Example - 
// const myName: string = "John";
// const myAge: number = 30;
// const isActive: boolean = true;
// const myNumberBigInt: bigint = 100n; // Used for very large integers that exceed the safe integer limit of standard numbers.
// const mySymbol: symbol = Symbol("id"); // Used for creating unique identifiers.
// const myNull: null = null; // Represents the intentional absence of a value.
// const myUndefined: undefined = undefined; // Represents a variable that has not been assigned a value.
// console.log(myName, myAge, isActive, myNull, myUndefined);
// -------------------------------------------------------------------------------------------------------------

// ###2. Complex & Structural Types
// These types describe collections of data or more specific structures.

// a. Array: Lists of items. Defined as number[] or Array<number>.
// b. Tuple: Arrays with a fixed number of elements and fixed types at specific positions.
// c. Object: Any non-primitive type. Usually defined via interface or type.
// d. Enum: A way to give friendly names to sets of numeric or string values.

// Example -
// const colors: string[] = ["red", "green", "blue"]; // Array of strings.
// const numbers: number[] = [1, 2, 3]; // Array of numbers.

// Tuple: Fixed order and types.
// let user: [string, number, boolean] = ["Alice", 30, true];

// Object: Defined using type or interface (we'll define these later).
// type User = {
//   name: string;
//   age: number;
// };
// const person: User = { name: "Bob", age: 25 };

// Enum: Named constants. 
// enum Direction { // Numeric Enum
//   Up, //0
//   Down, //1
//   Left, //2
//   Right //3
// }
// const move: Direction = Direction.Left;
// console.log(colors, user, person, move);
// --------------------------------------------------------------------------------------------


// ###3. Special Types
// These are shortcuts or special cases TypeScript uses to handle logic.

// a. any: Disables type checking. Use sparingly.
// b. unknown: Like any, but you must perform checks before using it.
// c. void: Used for functions that don't return anything.
// d. never: Used for functions that never return (e.g., error throws).
// e. null & undefined: Explicitly typed absence of value.

// Example - 
// let data: any = 10;
// data = "Hello"; // Allowed

// let unknownData: unknown = 10;
// unknownData = "Hello"; // Allowed, but cannot use directly
// console.log(unknownData.toUpperCase()); // Error
// function processValue(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase()); // Now it's safe
//   }
// }
// void :-
// function printMessage(): void {
//   console.log("Hello, World!"); // No return value
// }
// never :-
// function throwError(message: string): never {
//   throw new Error(message); // Never returns
// }
// --------------------------------------------------------------------------------------------

// ### Core Concepts (The Logic)
// @@@ Union & Intersection Types
// a. Union (|): A variable can be "this OR that."
// Example - let id: string | number;

// b. Intersection (&): Combines multiple types into one.
// Example - type AdminUser = User & Permissions;

// @@@ interfce 
// interface User{
//   username: string;
//   email: string;
//   age: number;
// }
// // intersec type - extend interface or another type 
// interface Admin extends User{
//   permissions: string[];
// }
// // read only property - "readonly" -> can not be changed after assignment 
// interface ReadonlyUser {
//   readonly username: string;
//   readonly email: string;
//   readonly age: number;
// }
// // optional property - "?" -> not mandtory
// interface OptionalUser {
//   username?: string;
//   email?: string;
//   age?: number;
// }
// interface useage example :-
// const user1: User = {
//   username: "John",
//   email: "[EMAIL_ADDRESS]",
//   age: 30,
// };
// const admin1: Admin = {
//   username: "Alice",
//   email: "[EMAIL_ADDRESS]",
//   age: 25,
//   permissions: ["read", "write"],
// };
// admin1.age = 26;

// readonly property example :- 
// const readonlyUser: ReadonlyUser = {
//   username: "John",
//   email: "[EMAIL_ADDRESS]",
//   age: 30,
// };
// readonlyUser.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.


// @@@ Type Aliases vs. Interfaces
// interface: Primarily used to define the shape of objects. They support declaration merging (you can define the same interface twice and TS will merge them).
// type: More flexible. Can define primitives, unions, tuples, and intersections. Use type for logic and interface for data structures.

// @@@ Type Assertions (as)
// Sometimes you know more about a value than TypeScript does. Use the as keyword to tell the compiler to treat a variable as a specific type.
// Example: const input = document.getElementById("main") as HTMLInputElement;

// @@@ Literal Types - You can use specific values as types.
// Example: let direction: "left" | "right" | "up"; (The variable can only be one of those three strings)

// -------------------------------------------------------------------------------------------------------------
