// ----------------16/07/2024-----------------------
// - String Indexing.    (-----)
// - Collection of char 
// - similer  to Array but not Same. 
//  indexing

// var str1 = "Zafar";
// var str2 = 'R';
// var str3 = `Techno`;

// console.log(str1, typeof str1);
// console.log(str2, typeof(str2));
// console.log(str3, typeof(str3));


// console.log("This is Multiple Line String");
// console.log(`This is 
// Multiple 
// Line 
// String`);


// var str1 = "Royal";
//          01234

// console.log(str1[4]);

// console.log(str1[str1.length-1]);



// str1.concat
// str1.indexOf
// str1.lastIndexOf
// str1.length
// str1.repeat
// str1.replace
// str1.replaceAll
// str1.toLowerCase
// str1.toUpperCase
/////////////////////////////////////
// var str  = "Royal Technosoft pvt ltd";
// console.log("Z",str,"Z");
// // str1.trim
// console.log("Z",str.trim(),"Z");
// // str1.trimEnd //
// console.log("Z",str.trimEnd(),"Z");
// // str1.trimStart //
// console.log("Z",str.trimStart(),"Z");

// // str1.charAt
// console.log(str.charAt(1));
// // str1.charCodeAt  //
// console.log(str.charCodeAt());   //ASCII Value


// ----------------17/07/2024-----------------------
// var str1 = "Royal Technosoft pvt ltd";
// str1.startsWith //  true / false
// console.log(str1.startsWith("R"));
// console.log(str1.startsWith("RoyaL"));


// str1.endsWith //    true / false
// console.log(str1.endsWith("d "));
// console.log(str1.endsWith("Pvt ltd "));


// str1.includes //   true false
// console.log(str1.includes("sft")); // 

// str1.slice //   


// console.log(str1.slice());  // 0-end
// //index -6 (starting)
// console.log(str1.slice(6));  // 6-end 
// // 6 starting 10-ending(not include in Output)
// console.log(str1.slice(6,10));  // 6-9

// var ans = str1.slice(6,15);
// console.log(ans);




// str1.split//   string convert in an Array 
// var newArr =  str1.split(); //['Royal Technosoft pvt ltd']
// var newArr =  str1.split(''); //['R', 'o', 'y', 'a', 'l', ' ', 'T', 'e', 'c', 'h', 'n', 'o', 's', 'o', 'f', 't', ' ', 'p', 'v', 't', ' ', 'l', 't', 'd']
// // var newArr =  str1.split(' '); // ['Royal', 'Technosoft', 'pvt', 'ltd']
// var newArr =  str1.split('o'); // ['R', 'yal Techn', 's', 'ft pvt ltd']


// var newArr =  str1.split(' ',1);//['Royal']

// console.log(newArr);


var str1 = "Royal Technosoft pvt ltd";

// // str1.slice //   
// // 1) starting index (5)   2) ending index (10)
// console.log(str1.slice(10,5));

// // str1.substring //
// // bigger value ending index   lowest  value as a starting index
// console.log(str1.substring(5,10));

// // str1.substr  //
//         // 5 as a starting index     10 as a length (step)
// console.log(str1.substr(5,10));



// - Template Strings. (-----)  (format string)


// var fname = "Raj";
// var Age = 12;

// // My Name is Raj.I am 12 Year's old.
// console.log("My name is",fname,".I am",Age,"Year's old.");
// console.log("My name is "+fname+".I am "+Age+" Year's old.");
// console.log(`My Name is ${fname}.I am ${Age} Year's old.`);











