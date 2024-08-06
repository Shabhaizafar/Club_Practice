// 5) IIFE Function. 
    // - without argument and without return type 
    // - with argument and without return type 
    // - without argument and with return type 
    // - with argument and with return type 

    // - Immidiate Invoked Function Expression

//Function Declaration
// (
//     function (){
//         console.log("Hello Everyone!!");
//     }
// )

// - without argument and without return type 

// (
// function (){
//     console.log("Hello Everyone!!");
// }
// )(); //function calling/Invoked


// (
//     function (){
//         console.log("Hello Everyone!!");
//     }
// )();


// // - with argument and without return type 
// (
//     function (n1,n2){ // n1,n2 Perameter
//         console.log(n1+n2);
//     }
// )(11,12); // 11 ,12 Arg


// // - without argument and with return type 

// var ans =  (
//     function (){
//         return 11;
//     }
// )();

// console.log(ans);


// // - with argument and with return type 
// var ans2 = (
//     function (n1,n2){ // n1,n2 Perameter
//         return n1+n2;
//     }
// )(11,12); // 11 ,12 Arg

// console.log(ans2);
////////////////////////////////////////////////////////////////
// 6) Generator Function. 


// function All(){
//     console.log("Hello");
//     console.log(10);
//     console.log("Hello");
// }
// All();

/*
1) 
function *functionname(){
    code;
}

2)
function* functionname(){
    code;
}

3)
function*functionname(){
    code;
}
*/

function *Function1(){
    yield 11;
    yield 13;
    yield "Royal";
    yield 14;
    yield [12,13,14,15];
}

var output = Function1();

// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);
// console.log(output.next().value);


console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());




//////////////////////////////
// IIFE 
// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
