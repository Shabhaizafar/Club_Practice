// How to Create a Multiple Objects Using Function : 
function Person(fname,lname,age){
    var user = Object.create(Person.prototype);
    user.FirstName = fname;
    user.LastName = lname;
    user.Age = age;
    return user;
};
Person.prototype =  {
    bioData : function (){
        console.log(`My Name is ${this.FirstName} ${this.LastName}.and I'm ${this.Age} Years Old.`);
    },
    is18 : function (){
        console.log("sert");
    },
    greet : function (){
        console.log("Hello");
    }
}

var obj1 = Person("Rakesh","Shah",30);
console.log(obj1);
obj1.bioData();

obj1.is18();

var obj2 = Person("Ajay","Sharma",20);
console.log(obj2);
obj2.bioData();

obj2.greet();


// ////////////////////////////////////////////////////////////////
// 1)
// Create a constructor function Person and add a method greet to its prototype. Demonstrate creating an instance and calling the greet method.


// 2)
// Write a constructor function Animal with a method makeSound on its prototype. Create a subclass Dog that inherits from Animal and overrides makeSound.


// 3)
// Add a property species to the Animal prototype and demonstrate how all instances of Animal and its subclasses access this property.


// 4)
// Write a constructor function Car with a method drive on its prototype. Create an instance of Car, and then add a new method stop to the prototype. Show how the instance can now use both methods.


// 5)
// Implement a Shape constructor function with a method area on its prototype. Create two subclasses, Circle and Rectangle, each with their own implementation of area.


// 6)
// Write a constructor function Book with a prototype method getSummary that returns a summary of the book. Show how to create a new Book instance and use this method.


// 7)
// Create a Person constructor function with an age property and a printAge method on its prototype. Show how to dynamically change the printAge method for all instances.


// 8)
// Implement a Vehicle constructor function with a method getType on its prototype. Create a Bike constructor that extends Vehicle and adds its own getType method. Demonstrate how both methods can be used.


// 9)
// Write a constructor function Employee with a method getDetails on its prototype. Create an instance of Employee, then dynamically add a new method promote to the prototype. Show how the new method is available to all Employee instances.


// 10)
// Implement a Shape constructor function with a prototype method describe. Create a new method describe directly on an instance of Shape and show how it overrides the prototype method.