// // 1. Write a program to print "Hello, JavaScript!" to the console.
// console.log("Hello, Javascript!");
// // 2. Modify the "Hello, World!" program to include your favorite quote.
// console.log("Hello, World!","Hard work is a key of Sucess!.");
// console.log("Hello, World! "+"Hard work is a key of Sucess!.");


// // 4. Write a program to print "Hello, [Your City]!" to the console.
// var city = "GNR";

// console.log("Hello,",city);
// console.log("Hello, "+city);
// console.log(`Hello, ${city}`); //string template


// // 5. Print "Welcome to JavaScript programming!" to the console.
// console.log("Welcome to JavaScript programming!");

///////////////////////////////////////
// ### Declare Variable Using `var`
// 1. Declare a `var` variable and initialize it with a number. Print the variable.
// 2. Declare a `var` variable and initialize it with a boolean. Print the variable.

// 3. Declare a `var` variable, initialize it with a string, and then change it to a number. Print the variable.

// var str; //declare
// str = "Royal";//initialization
// console.log(str);

// str = 100;//changed
// console.log(str);



// 4. Declare multiple `var` variables in a single statement and print them.

// var fname,lname;//declare
// fname="Royal";//initialization
// lname = "Techno";//initialization

// var fname="Royal",lname="Techno";//declare+initialization

// console.log(fname,lname);
// ////////////////////////////////////////////////

// ### More About Variables
// 2. Declare a variable using `let` inside a loop and print it outside the loop.

// for (var i = 0; i <=5; i++) {
//     console.log(i);
// }
// console.log(i);



// 3. Declare a variable using `const` and try to change its value within a block scope.

// const a = 12;
// {
//     const a = 100;
//     console.log("inner :",a);
// }
// console.log("outer :",a);

// 4. Create an object with `const` and add a new property to it.
// 5. Declare a variable using `var` and try to redeclare it using `let` in the same scope.


///////////////////////////////////////////////
// ### `let`
// 1. Declare a `let` variable and initialize it with your age. Print the variable.

// 2. Declare a `let` variable and initialize it with the current year. Print it and then update it to next year.
// let year = 2024;
// console.log(year);
// year++;
// console.log(year);

// let Today = new Date();
// console.log(Today.getFullYear());
// console.log(Today.getFullYear()+1);



// 3. Use a `let` variable inside a `for` loop to count from 1 to 5.
// 4. Declare a `let` variable inside an `if` block and try to access it outside the block.

// 5. Use `let` to declare a variable that holds an array and modify the array.
// let Arr = [1,2,3,4];

// console.log(Arr);
// Arr.push(100);
// // let Arr     invalid
// console.log(Arr);



// ### `const`
// 1. Declare a `const` variable and initialize it with a string. Print the variable.
// 2. Create a `const` array and add new elements to it.

// const Arr = [1,2,3,4];
// console.log(Arr);
// Arr.push(100);
// console.log(Arr);


// 3. Declare a `const` object and change one of its properties.

// 4. Use `const` to declare a variable that holds the result of a mathematical operation.

// primitive and non-primitive

// primitive vs reference 

// primitive : Number,boolean,string 
//reference : Array,object




// var n1 = 12;
// var n2 = n1;

// console.log("Before N1 : ",n1); //12
// console.log("Before N2 : ",n2); //12
// n1++;
// console.log("After N1 : ",n1); //13 
// console.log("After N2 : ",n2); //12


const Arr1 = [1,2,3];

Arr1= [];
const Arr2 = Arr1;
console.log("Before Arr1:",Arr1);
console.log("Before Arr1:",Arr2);
Arr1.push(100);

Arr2.push(2000);
console.log("After Arr1:",Arr1);
console.log("After Arr2:",Arr2);


