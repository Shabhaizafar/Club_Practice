// Using Class Constructor :   : After 2015   ES6

//Empty Class 
// class Person{

// }

// class Person{
//     constructor(fname,lname,age){
//     this.FirstName = fname;
//     this.LastName = lname;
//     this.Age = age;
//     }
//     bioData(){
//         console.log(`My Name is ${this.FirstName} ${this.LastName}.and I'm ${this.Age} Years Old.`);
//     }
// }

// const p1 = new Person("Raj","Shah",23);
// console.log(p1);
// p1.bioData();

// const p2 = new Person("Ajay","Patel",10);
// console.log(p2);
// p2.bioData();

//////////////////////////////
// ES6 Classes
// Basic Class:

// Define a class named Car with a constructor that accepts make, model, and year. Add a method getDetails that returns a string in the format: "Make Model, Year".
// Creating Objects:

// Instantiate three Car objects with different makes, models, and years. Store these objects in an array called garage. Write a method in the Car class that logs the details of each car in the garage array.


// Combination of Constructor and Class:
// Convert a constructor function-based implementation of a Person object to an ES6 class-based implementation. The Person object should have properties name, age, and a method greet that returns "Hello, my name is Name and I am Age years old.".

////////////////////////////////////////////////////
// Instantiate three Car objects with different makes, models, and years. Store these objects in an array called garage. Write a method in the Car class that logs the details of each car in the garage array.
class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getdetails(){
        console.log(`Make : ${this.make}\nModel : ${this.model}\nYear : ${this.year}\n\n`);
    }
};

var c1  = new Car("BMW",123,2024);
var c2  = new Car("TATA",123,2024);
var c3  = new Car("Z",123,2024);

const garage = [c1,c2,c3];
console.log(garage);

for (const element of garage) {
    element.getdetails();
}