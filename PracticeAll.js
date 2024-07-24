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


// const Arr1 = [1,2,3];

// Arr1= [];
// const Arr2 = Arr1;
// console.log("Before Arr1:",Arr1);
// console.log("Before Arr1:",Arr2);
// Arr1.push(100);

// Arr2.push(2000);
// console.log("After Arr1:",Arr1);
// console.log("After Arr2:",Arr2);



/////////////////////////23/07/2024///////////////////////

// ### String Indexing
// 2. Access and print the last character of a string using its index.


/////////////////
// 3. Create a string and use a loop to print each character on a new line.
// var str = "Royal";
// for (let i = 0; i < str.length; i++) {
//     console.log(i,str[i]);
// }
//////////////////

// ### Useful String Methods
// 1. Use `substring` to extract a part of a string.
// 3. Use `includes` to check if a string contains a specific word.
// 6. Use `charAt` to get the character at a specific index in a string.
// 7. Use `indexOf` to find the position of the first occurrence of a substring.
// 8. Use `lastIndexOf` to find the position of the last occurrence of a substring.
// 9. Use `repeat` to repeat a string multiple times and print the result.



// 2. Use `slice` to create a new string from the 3rd to the 7th character.
///        1234567
// var str = "Royal Technosoft pvt ltd.";
//         01234567

// slice : piece
// slice(starting index, ending index(optional))
// console.log(str.slice(2));
// console.log(str.slice(2,7));


// 4. Use `split` to convert a string into an array of words and print the array.
// var str = "Royal Technosoft pvt ltd.";

// // var newArr = str.split();
// // var newArr = str.split('');
// var newArr = str.split(' ');
// // var newArr = str.split('o');



// console.log(newArr);


// // 5. Use `join` to convert an array of words back into a string and print it.

// // var newstr = newArr.join();
// // var newstr = newArr.join(' ');
// var newstr = newArr.join(' || ');



// console.log(newstr);

///////////////////////////////////////////////////
// ### Template Strings
// 1. Create a template string that includes your name and age.
// 2. Use template strings to concatenate two strings.
// 3. Create a multi-line template string with a quote on each line.

// 5. Use template strings to create a sentence that includes the length of a string.

// var str = "Royal Technosoft pvt ltd.";

// console.log(`"${str}" and length of String is : ${str.length}.`);

// ### `null`, `undefined`, `BigInt`, `typeof`
// 1. Declare a variable without initializing it and check if it is `undefined`.
// 2. Assign `null` to a variable and check its type using `typeof`.
// 6. Declare a variable using `BigInt` and multiply it by another `BigInt`.
// 8. Compare `null` with `0` and explain the result.
// 9. Declare a variable with `undefined` and try to add it to a number.


// 3. Create a `BigInt` and use it in an addition operation with another `BigInt`.
// var num1 = 12n;
// var num2 = 13;
// // var num1 = BigInt(12);

// // console.log(num1,typeof num1);
// console.log(num1+BigInt(num2));


// 5. Compare `null` and `undefined` using strict equality and explain the result.
// var n1 = undefined;
// var n2 = null;
// console.log(typeof n1,typeof n2);
// console.log(n1==n2); //true

// console.log(n1===n2); //false


// console.log(0.5+0.1==0.6); //true
// console.log(0.2+0.1); // 0.3___________________4
// console.log(0.2+0.1==0.3);//false

// console.log(0.9+0.1==1.0);//true

// console.log(18==18);// true
// console.log(18==18==18);// false
// console.log(18==18==1);// true

// ----------------14/07/2024-----------------

// ### Booleans and Comparison Operators
// 2. Use `==` and `===` to compare `42` and `"42"`.
// 6. Compare two boolean values using `==` and `===`.
// 8. Use `<`, `<=`, `>`, and `>=` to compare two numbers and print the results.

// 9. Compare two arrays using `==` and `===` and explain the result.
// var Arr1 = [1,2,3,4];
// var Arr2 = [1,2,3,4];

// console.log(Arr1==Arr2);
// console.log(Arr1===Arr2);
// Arr1.push(12)
// console.log(Arr1);
// console.log(Arr2);



// 4. Use `!=` and `!==` to compare `0` and `false`.
// var s1 = 0;
// var s2 = false;
// console.log(s1!=s2);   //false
// console.log(s1!==s2);  //true
// var s1 = '0';
// var s2 = 'false';
// console.log(s1!=s2);    //true
// console.log(s1!==s2);  //true




// ### Truthy and Falsy Values
// 2. List all falsy values in JavaScript.
// 4. Check the truthiness of an empty string and print the result.
// 7. Use an `if` statement to print a message only if a variable is truthy.
// 9. Check the truthiness of `NaN` and print the result.


// 10. Use logical `||` to assign a default value to a variable if another variable is falsy.
// var v1 = undefined;
// var v2 = v1 || 100;

// console.log(v1);
// console.log(v2);



// 6. Check the truthiness of `0` and print the result.

// var n1 = 0;

// console.log(Boolean(n1));


// var n1 = '0';

// console.log(Boolean(n1));


// ------------------------------------
// ### If Else Statement
// 2. Use `if-else` to check if a string contains more than 10 characters.
// 4. Use `if-else` to print whether a number is a multiple of 3.
// 5. Write a function that checks if a value is `null` or `undefined`.
// 6. Use `if-else` to check if a number is even or odd.


// 8. Use `if-else` to check if a number is within a specific range.

// var n = 10;
// if(n>=1 && n<=parseInt(Math.random()*1000))
// {
//     console.log("In Range");
// }
// else{
//     console.log("Out In Range");
// }

// console.log(Math.random()*10);
// console.log(parseInt(Math.random()*10));
// console.log(Math.floor(Math.random()*10));

// 10. Use `if-else` to print a message based on the value of a boolean variable.
// var n= " ";
// if(Boolean(n))
// {
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// ### Ternary Operator
// 2. Use a ternary operator to assign a value to a variable based on a condition.
// 4. Use a ternary operator to check if a string is empty and return a message.
// 6. Use a ternary operator to set a variable to `true` if a number is positive, otherwise `false`.
// 7. Rewrite an `if-else` statement that checks if a number is within a range using a ternary operator.
// 8. Use a ternary operator to print a message based on the value of a boolean variable.


// 10. Use a ternary operator to format a string based on a condition.

// var Age = 20;
// var str = (Age<18)? "You are Teenager" : "You are Adult";

// console.log(str);
