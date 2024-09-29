
//Function Constructor
// How to Create a Multiple Objects Using Function : 
function Person(fname,lname,age){
    this.FirstName = fname;
    this.LastName = lname;
    this.Age = age;
};
Person.prototype = {
    bioData : function (){
        console.log(`My Name is ${this.FirstName} ${this.LastName}.and I'm ${this.Age} Years Old.`);
    },
    is18 : function (){
        console.log("sert");
    }
};

//          1)     2)
//          {}  -> function
//          this -> {}
//      function.prototype -> this
//           this -> {,prototype}
var obj1 = new Person("Rakesh","Shah",30);
console.log(obj1);
obj1.bioData();

obj1.is18();

var obj2 = new Person("Ajay","Sharma",20);
console.log(obj2);
obj2.bioData();



////////////////////////////

// Create a Basic Constructor

// Write a function constructor called Person that takes name and age as parameters and assigns them to the name and age properties of the object. Create an instance of Person and log its properties to the console.


// Add Methods to Constructor
// Extend the Person constructor from the previous question by adding a method called introduce that logs a message like "Hi, I'm [name] and I'm [age] years old." to the console.

// Prototype Method
// Add a method celebrateBirthday to the prototype of the Person constructor that increments the age property by 1 and logs a message like "Happy Birthday, [name]! You are now [age] years old.".