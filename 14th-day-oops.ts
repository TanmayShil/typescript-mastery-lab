// *****************************************************************************************//
// *****************************************************************************************//


// OOPS - Object-Oriented Programming System
// Object Oriented Programming System (OOPs) is a programming paradigm based on the concept of "objects", 
// which can contain data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
// Difference b/w procedural and object oriented programming:

// Procedural programming:- 
// 1. Focus on procedures/functions
// 2. Data and functions are separate
// 3. Top-down approach
// 4. Less secure
// Example: C, FORTRAN, PASCAL, etc.

// Object-oriented programming:- 
// 1. Focus on objects
// 2. Data and functions are combined
// 3. Bottom-up approach
// 4. More secure
// Example: Java, Python, C++, TypeScript, etc.

//Difference between javacript OOPs and Typescript OOPs: -
//Typescript OOPS:
// In typescript theOOPs concepts are implemented using classes and objects.
// In javascript theOOPs concepts are implemented using prototypes.
// In ts are more secure and less prone to errors.
// In ts is statically typed and in js is dynamically typed.
// In ts we can use interfaces and abstract classes.

//Javascript OOPs:
// In javascript theOOPs concepts are implemented using prototypes.
// In js are less secure and more prone to errors.
// In js is dynamically typed and in ts is statically typed.
// In js we cannot use interfaces and abstract classes.
// In js we cannot use access modifiers.


//-------------------------------------------------------------------------------------------------//
//Class:-
// In typescript a class is a blueprint for creating objects. 
// It is a user-defined data type that can store multiple values of different data types.
// Syntax:-
// class ClassName {
// properties
// constructor
// methods
// }

//Properties:- 
// Properties are the variables that are declared in a class.
// They are used to store the data of the class.
// Syntax:-
// propertyName: dataType;

//Constructor:- 
// Constructor is a special method that is called when an object is created.
// It is used to initialize the properties of the class.
// Syntax:-
// constructor(){
//     
// }

//Methods:- 
// Methods are the functions that are declared in a class.
// They are used to perform operations on the properties of the class.
// Syntax:-
// methodName(){
// 
// }

// Example:-
// class Person {
//     name:string;
//     age:number;
//     constructor(name:string, age:number) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello():void {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const person = new Person("John", 30);
// person.sayHello();

//Object:- 
// Object is an instance of a class.
// Syntax:-
// const objectName = new ClassName();
// Example:-
// const person = new Person("John", 30);
// person.sayHello();

//Difference between Class and Object:-
// Class is a blueprint for creating objects. 
// Object is an instance of a class.
// Class is a logical entity. 
// Object is a physical entity.
// Class is defined once. 
// Object is created many times.
// Class is a template. 
// Object is a real-world entity.

//-------------------------------------------------------------------------------------------------//
//class and objects Problem Sets(Basic-intermediate-hard):-

// //1. Define a class "Car" with properties "make", "model", "year", and a method "displayInfo" that prints the car's information.
// class Car {
//     make:string;
//     model:string;
//     year:number;
//     constructor(make:string, model:string, year:number) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     displayInfo():void {
//         console.log(`The car is a ${this.make} ${this.model} from ${this.year}.`);
//     }
// }
// const car = new Car("Toyota", "Camry", 2022);
// car.displayInfo();

// //2. Create a class "Rectangle" with properties "width" and "height", and methods to calculate the area and perimeter.
// class Rectangle {
//     width:number;
//     height:number;
//     constructor(width:number, height:number) {
//         this.width = width;
//         this.height = height;
//     }
//     area():number {
//         return this.width * this.height;
//     }
//     perimeter():number {
//         return 2 * (this.width + this.height);
//     }
// }
// const rectangle = new Rectangle(10, 20);
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

// //3. Create a class "Bank Account" with properties "accountNumber", "accountHolderName", "balance", and methods "deposit" and "withdraw".
// class BankAccount {
//     accountNumber:string;
//     accountHolderName:string;
//     balance:number;
//     constructor(accountNumber:string, accountHolderName:string, balance:number) {
//         this.accountNumber = accountNumber;
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
//     deposit(amount:number):void {
//         this.balance += amount;
//     }
//     withdraw(amount:number):void {
//         this.balance -= amount;
//     }
// }
// const bankAccount = new BankAccount("123456789", "John Doe", 1000);
// bankAccount.deposit(100);
// bankAccount.withdraw(100);
// console.log(bankAccount.balance);

//------------------------------------------------------------------------------------------------//
//Access Modifiers in TypeScript
//Access Modifiers are keywords that are used to control the access of class members.
//Types of Access Modifiers:-
//1. public
//2. private
//3. protected

//Syntax:-
//public: accessible from anywhere
//private: accessible only within the class
//protected: accessible within the class and its subclasses

//Example:-
// class Person {
//     public name: string;
//     private age: number;
//     protected gender: string;
//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// const person = new Person("John", 30, "Male");
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

//------------------------------------------------------------------------------------------------//
//Problem Set based on Access Modifiers:-

//1. Create a class "Student" with properties "name", "age", "grade", and methods "displayInfo" that prints the student's information. Make the "grade" property private.
// class Student {
//     name: string;
//     age: number;
//     private grade: number;
//     constructor(name: string, age: number, grade: number) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     displayInfo(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
//     }
// }
// const student = new Student("John", 20, 90);
// student.displayInfo();
// console.log(student.grade);

//2. Create a class "BankAccount" with properties "accountNumber", "accountHolderName", "balance", and methods "deposit" and "withdraw". Make the "balance" property private.
// class BankAccount {
//     accountNumber: string;
//     accountHolderName: string;
//     private balance: number;
//     constructor(accountNumber: string, accountHolderName: string, balance: number) {
//         this.accountNumber = accountNumber;
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
//     deposit(amount: number): void {
//         this.balance += amount;
//     }
//     withdraw(amount: number): void {
//         this.balance -= amount;
//     }
// }
// const bankAccount = new BankAccount("123456789", "John Doe", 1000);
// bankAccount.deposit(100);
// bankAccount.withdraw(100);
// console.log(bankAccount.balance);

//3. Create a class "Employee" with properties "name", "age", "salary", and methods "displayInfo" that prints the employee's information. Make the "salary" property private.
// class Employee {
//     name: string;
//     age: number;
//     private salary: number;
//     constructor(name: string, age: number, salary: number) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     displayInfo(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
//     }
// }
// const employee = new Employee("John", 30, 50000);
// employee.displayInfo();
// console.log(employee.salary);


//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//Static:- 
// Static is a keyword that is used to create a static property or method.
// Static members are not associated with any particular instance of a class.
// They are associated with the class itself.
// They can be accessed without creating an instance of the class.

//Syntax:-
//static propertyName: type;
//static methodName(): returnType {
//...
//}
//Example:-
// class Person {
//     static count: number = 0;
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         Person.count++;
//     }
//     sayHello(): void {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const person1 = new Person("John", 30);
// const person2 = new Person("Jane", 25);
// console.log(person1.name);
// console.log(person2.name);
// console.log(Person.count);

//*********************************************************************************************  */
//*********************************************************************************************** */