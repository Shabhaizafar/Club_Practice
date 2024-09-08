// How to Create an Object in JS : 

// 1) Using Object Literal :   {}
var obj1 = {
    fname : "Raj",
    lname : "Shah",
    age : 13 
};
console.log(obj1);


// 2) Using Object Constructor : 
var obj2 = new Object();
obj2.fname = "Ajay";
obj2.gender = "male";
console.log(obj2);


// 3) Using Object.create() : 
var obj3 = Object.create({});
obj3.fname = "Rajesh";
obj3.gender = "male";
obj3.contact = 1234567890;

console.log(obj3);



// 4) Using Object.assign();
var obj4 = Object.assign({});
obj4.fname = "Rakesh";
obj4.gender = "male";
obj4.contact = 567890;
console.log(obj4);


// 5) Using Function Constructor : 

function All(fname,lname){
    var user = {};
    user.Firstname = fname;
    user.Lastname =lname;
    return user;
};

var obj5 = All("Aayush","Patel");
console.log(obj5);



// 1) Using Object Literal
// Create an object representing a book with properties: title, author, year, and genre. Set appropriate values for each property and log the object.

//////////////////////////////////////////////
// 2) Using Object Constructor
// Create an object using the Object constructor to represent a smartphone with properties: brand, model, and year. Assign values to these properties and log the object.
//////////////////////////////////////////////

// 3) Using Object.create()
// Create an object using Object.create() with a prototype that includes a method called describe which logs a description of the object. Create an instance of this object with properties: name, type, and color. Use the describe method to log the description.
//////////////////////////////////////////////

// 4) Using Object.assign()
// Create an object using Object.assign() to represent a laptop with properties: brand, processor, ram, and storage. Assign values to these properties and log the object.
//////////////////////////////////////////////

// 5) Using Function Constructor
// Create a function constructor called Car that takes make, model, and year as arguments. The constructor should return an object with these properties and a method called displayInfo that logs a message containing the car's make, model, and year. Instantiate an object using this constructor and call the displayInfo method.