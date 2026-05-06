// *****************************************************************************************//
// *****************************************************************************************//


// Pillars of OOP:-
// There are 4 pillars of OOP:-
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
//1. Encapsulation:-  Data and methods in a single unit or class.
//It is the mechanism of binding the data (variables) and the methods (functions) that operate on the data into a single unit called a class.
//It is also known as data hiding.
//Advantages of Encapsulation:-
//1. Data hiding
//2. Data security
//3. Data abstraction
//4. Data modularity
//5. Data integrity
//6. Data flexibility
//7. Data reusability
//8. Data maintainability
//9. Data scalability
//10. Data testability
//Syntax:-
//class ClassName {
//private properties
//public methods to access the properties
//}

//Example:-
// class Person {
//     private name: string;
//     private age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName(): string {
//         return this.name;
//     }
//     getAge(): number {
//         return this.age;
//     }
// }
// const person = new Person("John", 30);
// console.log(person.getName()); //return name
// console.log(person.getAge()); //return age
// console.log(person.name); //error - because it is private
// console.log(person.age); //error - because it is private

//------------------------------------------------------------------------------------------/------------------------------------------------------------------------------------------//
//2. Inheritance:-  Creating a new class from an existing class.
//It is the mechanism of creating a new class from an existing class.
//The new class is called the child class and the existing class is called the parent class.
//The child class inherits the properties and methods of the parent class.
//Types of Inheritance:-
//a. Single Inheritance
//b. Multilevel Inheritance
//c. Hierarchical Inheritance
//d. Multiple Inheritance
//e. Hybrid Inheritance


//Syntax:-
//class ChildClass extends ParentClass {
//properties
//constructor
//methods
//}

//a. Single Inheritance:- 
// A class inherits from a single parent class.
//Syntax:-
//class ChildClass extends ParentClass {
//properties
//constructor
//methods
//}
//Example:-
// class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(): void {
//         console.log(`${this.name} is eating.`);
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, age: number, breed: string) {
//         super(name, age);
//         this.breed = breed;
//     }
//     bark(): void {
//         console.log(`${this.name} is barking.`);
//     }
// }
// const dog = new Dog("Buddy", 3, "Golden Retriever");
// console.log(dog.name); //return name
// console.log(dog.age); //return age
// console.log(dog.breed); //return breed
// dog.eat(); //eat method of Animal class
// dog.bark(); //bark method of Dog class


//-----------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
//b. Multilevel Inheritance:- 
// A class inherits from a parent class, and another class inherits from that parent class.
//Syntax:-
//class ChildClass extends ParentClass {
//properties
//constructor
//methods
//}
//Example:-
// class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(): void {
//         console.log(`${this.name} is eating.`);
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, age: number, breed: string) {
//         super(name, age);
//         this.breed = breed;
//     }
//     bark(): void {
//         console.log(`${this.name} is barking.`);
//     }
// }
// class Puppy extends Dog {
//     color: string;
//     constructor(name: string, age: number, breed: string, color: string) {
//         super(name, age, breed);
//         this.color = color;
//     }
//     play(): void {
//         console.log(`${this.name} is playing.`);
//     }
// }
// const puppy = new Puppy("Buddy", 3, "Golden Retriever", "Golden");
// console.log(puppy.name); //return name
// console.log(puppy.age); //return age
// console.log(puppy.breed); //return breed
// console.log(puppy.color); //return color
// puppy.eat(); //eat method of Animal class
// puppy.bark(); //bark method of Dog class
// puppy.play(); //play method of Puppy class


//-----------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
//c. Hierarchical Inheritance:- 
// Multiple classes inherit from a single parent class.
//Syntax:-
//class ChildClass extends ParentClass {
//properties
//constructor
//methods
//}
//Example:-
// class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(): void {
//         console.log(`${this.name} is eating.`);
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, age: number, breed: string) {
//         super(name, age);
//         this.breed = breed;
//     }
//     bark(): void {
//         console.log(`${this.name} is barking.`);
//     }
// }
// class Cat extends Animal {
//     color: string;
//     constructor(name: string, age: number, color: string) {
//         super(name, age);
//         this.color = color;
//     }
//     meow(): void {
//         console.log(`${this.name} is meowing.`);
//     }
// }
// const dog = new Dog("Buddy", 3, "Golden Retriever");
// const cat = new Cat("Whiskers", 2, "Golden");
// console.log(dog.name); //return name
// console.log(dog.age); //return age
// console.log(dog.breed); //return breed
// console.log(cat.name); //return name
// console.log(cat.age); //return age
// console.log(cat.color); //return color
// dog.eat(); //eat method of Animal class
// dog.bark(); //bark method of Dog class
// cat.eat(); //eat method of Animal class
// cat.meow(); //meow method of Cat class


//---------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
//d. Multiple Inheritance:- 
// A class can inherit from multiple parent classes.
//Multiple inheritance is not supported in TypeScript.
//Syntax:-
//class ChildClass extends ParentClass1, ParentClass2 {
//properties
//constructor
//methods
//}
//Example:-
// class ParentClass1 {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class ParentClass2 {
//     age: number;
//     constructor(age: number) {
//         this.age = age;
//     }
// }
// class ChildClass extends ParentClass1, ParentClass2 {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
// }
// const childClass = new ChildClass("John", 30);
// console.log(childClass.name); //return name
// console.log(childClass.age); //return age


//-----------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
//e. Hybrid Inheritance:- 
// A combination of two or more types of inheritance.
//Syntax:-
//class ChildClass extends ParentClass1, ParentClass2 {
//properties
//constructor
//methods
//}

//Example:-
// class ParentClass1 {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class ParentClass2 {
//     age: number;
//     constructor(age: number) {
//         this.age = age;
//     }
// }
// class ChildClass extends ParentClass1, ParentClass2 {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
// }
// const childClass = new ChildClass("John", 30);
// console.log(childClass.name); //return name
// console.log(childClass.age); //return age


//-----------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
//3. Polymorphism:- 
// Polymorphism is the ability of an object to take on many forms.
//Polymorphism is a Greek word that means "many forms".
//Polymorphism is the ability of a function to work with different data types.
//Polymorphism is the ability of a class to be used in different contexts.
//Types of Polymorphism:-
//1. Compile-time Polymorphism
//2. Runtime Polymorphism
//Syntax:-
//Compile-time Polymorphism:-
//Compile-time Polymorphism is the ability of a function to work with different data types.
//Compile-time Polymorphism is the ability of a class to be used in different contexts.
//Example:-
// class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(1, 2)); //return 3

//Runtime Polymorphism:-
//Runtime Polymorphism is the ability of a function to work with different data types.
//Runtime Polymorphism is the ability of a class to be used in different contexts.
//Example:-
// class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(1, 2)); //return 3


//--------------------------------------------------------------------
//Method Overriding:-
//Method overriding is a feature of polymorphism in which a subclass can override the method of its superclass.

//Example:-
// class Animal {
//     eat(): void {
//         console.log("The animal is eating.");
//     }
// }
// class Dog extends Animal {
//     eat(): void {
//         console.log("The dog is eating.");
//     }
// }
// const animal = new Animal();
// const dog = new Dog();
// animal.eat();
// dog.eat();

//---------------------------------------------------------------------
//Method Overloading:-
//Method overloading is a feature of polymorphism in which a class can have multiple methods with the same name but different parameters.
//Example:-
// class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(1, 2)); //return 3


//-----------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
//4. Abstraction:- 
// Abstraction is the process of hiding the implementation details and showing only the essential features of an object.
//Example:-
// class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(1, 2)); //return 3

//-------------------------------------------------------------------------------//
//Types of Abstraction:-
//1. Abstract Class
//2. Interface

//-----------------------------------------------------------------------------------//
//Abstract Class:- Abstract class is a class that is declared with the abstract keyword.

//An abstract class is a class that cannot be instantiated on its own. It is meant to be inherited by other classes, and its abstract methods must be implemented by the subclasses.

//Abstract classes can have both abstract methods (methods without a body) and concrete methods (methods with a body).

//Syntax:- 
//abstract class ClassName {
//  abstract methodSignature;
//}

//Example:- 
// abstract class Animal {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(): void {
//         console.log(`${this.name} is eating.`);
//     }
// }
// class Dog extends Animal {
//     breed: string;
//     constructor(name: string, age: number, breed: string) {
//         super(name, age);
//         this.breed = breed;
//     }
//     bark(): void {
//         console.log(`${this.name} is barking.`);
//     }
// }
// const dog = new Dog("Buddy", 3, "Golden Retriever");
// console.log(dog.name); //return name
// console.log(dog.age); //return age
// console.log(dog.breed); //return breed
// dog.eat(); //eat method of Animal class
// dog.bark(); //bark method of Dog class

//-------------------------------------------------------------------------------//
//Interface:-
//Interface is a blueprint of a class.
//Interface is a contract between the class and the object.

//Interface cannot be instantiated on its own. It is meant to be inherited by other classes, and its abstract methods must be implemented by the subclasses.

//Interfaces can have both abstract methods (methods without a body) and concrete methods (methods with a body).

//Syntax:- 
//interface InterfaceName {
//  methodSignature;
//}

//Example:- 
// interface Animal {
//     name: string;
//     age: number;
//     eat(): void;
// }
// class Dog implements Animal {
//     name: string;
//     age: number;
//     breed: string;
//     constructor(name: string, age: number, breed: string) {
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     eat(): void {
//         console.log(`${this.name} is eating.`);
//     }
//     bark(): void {
//         console.log(`${this.name} is barking.`);
//     }
// }
// const dog = new Dog("Buddy", 3, "Golden Retriever");
// console.log(dog.name); //return name
// console.log(dog.age); //return age
// console.log(dog.breed); //return breed
// dog.eat(); //eat method of Animal class
// dog.bark(); //bark method of Dog class


//-------------------------------------------------------------------------------//
//Key Differences Between Abstract Class and Interface:-
//Abstract Class:-
// 1. Abstract classes are declared with the abstract keyword.
// 2. Abstract classes can have both abstract methods (methods without a body) and concrete methods (methods with a body).
// 3. Abstract classes can have constructors.
// 4. Abstract classes can have all access modifiers.
// 5. Abstract classes can inherit from one class.
// 6. Abstract classes can inherit from multiple classes.

//Interface:- 
// 1. Interfaces are declared with the interface keyword.
// 2. Interfaces can have only abstract methods (methods without a body).
// 3. Interfaces cannot have constructors.
// 4. Interfaces can have only public access modifier.
// 5. Interfaces can inherit from multiple classes.


//---------------------------------------------------------------------------
//Problem Set(Easy-intermediate-hard):-
//1. Easy:
// Create an abstract class `Vehicle` with properties `make`, `model`, and `year`. It should have an abstract method `startEngine()`.
// Then, create two concrete classes `Car` and `Motorcycle` that inherit from `Vehicle` and implement `startEngine()`.

// abstract class Vehicle {
//     make: string;
//     model: string;
//     year: number;
//     constructor(make: string, model: string, year: number) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     abstract startEngine(): void;
// }
// class Car extends Vehicle {
//     constructor(make: string, model: string, year: number) {
//         super(make, model, year);
//     }
//     startEngine(): void {
//         console.log(`${this.make} ${this.model} engine started.`);
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(make: string, model: string, year: number) {
//         super(make, model, year);
//     }
//     startEngine(): void {
//         console.log(`${this.make} ${this.model} engine started.`);
//     }
// }
// const car = new Car("Toyota", "Camry", 2022);
// const motorcycle = new Motorcycle("Honda", "CBR", 2022);
// car.startEngine();
// motorcycle.startEngine();


//----------------------------------------------------------------------------------
// //2. Medium:
// // Create an interface `Shape` with a method `calculateArea()`. 
// // Then, create two classes `Circle` and `Rectangle` that implement `Shape` and its method.

// interface Shape {
//     calculateArea(): number;
// }
// class Circle implements Shape {
//     radius: number;
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }
// class Rectangle implements Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     calculateArea(): number {
//         return this.width * this.height;
//     }
// }
// const circle = new Circle(5);
// const rectangle = new Rectangle(10, 20);
// console.log(circle.calculateArea());
// console.log(rectangle.calculateArea());

//------------------------------------------------------------------------------
// //3. Hard:
// // Create an abstract class `Employee` with properties `id`, `name`, and `salary`. It should have an abstract method `calculateBonus()`.
// // Then, create two concrete classes `FullTimeEmployee` and `PartTimeEmployee` that inherit from `Employee` and implement `calculateBonus()`.

// abstract class Employee {
//     id: number;
//     name: string;
//     salary: number;
//     constructor(id: number, name: string, salary: number) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }
//     abstract calculateBonus(): number;
// }
// class FullTimeEmployee extends Employee {
//     constructor(id: number, name: string, salary: number) {
//         super(id, name, salary);
//     }
//     calculateBonus(): number {
//         return this.salary * 0.1;
//     }
// }
// class PartTimeEmployee extends Employee {
//     constructor(id: number, name: string, salary: number) {
//         super(id, name, salary);
//     }
//     calculateBonus(): number {
//         return this.salary * 0.05;
//     }
// }
// const fullTimeEmployee = new FullTimeEmployee(1, "John Doe", 1000);
// const partTimeEmployee = new PartTimeEmployee(2, "Jane Doe", 500);
// console.log(fullTimeEmployee.calculateBonus());
// console.log(partTimeEmployee.calculateBonus());




//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

