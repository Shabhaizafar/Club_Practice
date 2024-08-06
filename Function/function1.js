// Functions in JavaScript :-

// 1) Function Declaration.
// function function_name(){

// }

    // - without argument and without return type 
    //initialization

// function sayHello(){
//     console.log("Hello Everyone,Wlcome to JS.");
// }

// //Function Calling / invoked
// // sayHello();

//     // - with argument and without return type 
// function Addition(n1,n2){ // n1,n2 perameter
//     console.log(n1+n2);
// }
// // Addition(12,13);//12,13  Argument


//     // - without argument and with return type 
// function Printingsomthing(){
//     var n1 = "Aryan";
//     var n2 = "Shah";
//     return n1+n2;    //with rtn type
// }
// // console.log(Printingsomthing());

// var ans = Printingsomthing();
// // console.log(ans);

//     // - with argument and with return type 

// function result(s){  //s perameter
//     if(s>=33)
//         return "Pass";  //rtn 
//     else 
//         return "Fail";  //rtn 
// }

// // console.log(result(5)); //5 argument

//////////////////////////////////////////////////////////////


// 2) Expression Function.
    // - without argument and without return type 
    //initialization

var sayHello = function (){
        console.log("Hello Everyone,Wlcome to JS.");
    }
    
    //Function Calling / invoked
    // sayHello();
    
        // - with argument and without return type 
var Addition = function (n1,n2){ // n1,n2 perameter
        console.log(n1+n2);
    }
    // Addition(12,13);//12,13  Argument
    
    
        // - without argument and with return type 
var Printingsomthing =function (){
        var n1 = "Aryan";
        var n2 = "Shah";
        return n1+n2;    //with rtn type
    }
    // console.log(Printingsomthing());
    
    var ans = Printingsomthing();
    // console.log(ans);
    
        // - with argument and with return type 
    
var result = function (s){  //s perameter
        if(s>=33)
            return "Pass";  //rtn 
        else 
            return "Fail";  //rtn 
    }
    
    // console.log(result(5)); //5 argument
    


    ////////////////////////////////
// 3) Arrow Function. 

    // - without argument and without return type 
    //initialization

    var sayHello =  ()=>{
        console.log("Hello Everyone,Wlcome to JS.");
    }
    
    //Function Calling / invoked
    // sayHello();
    
        // - with argument and without return type 
// var Addition =  (n1,n2)=>{ // n1,n2 perameter
//         console.log(n1+n2);
//     }


// var Addition =n1=>console.log(n1);
    // Addition(12);//12,13  Argument

    
        // - without argument and with return type 
// var Printingsomthing = ()=>{
//         var n1 = "Aryan";
//         var n2 = "Shah";
//         return n1+n2;    //with rtn type
//     }
    // console.log(Printingsomthing());

    // var Printingsomthing = () => {return "Hello";}

    // var ans = Printingsomthing();
    // console.log(ans);
    
        // - with argument and with return type 
    
// var result =  (s)=>{  //s perameter
//         if(s>=33)
//             return "Pass";  //rtn 
//         else 
//             return "Fail";  //rtn 
//     }
    

// var result =s=>{  //s perameter
//     if(s>=33)
//         return "Pass";  //rtn 
//     else 
//         return "Fail";  //rtn 
// }
//     console.log(result(5)); //5 argument

////////////////////////////////////
// 4) Anonymous Function.

// 5) IIFE Function. 
    // - without argument and without return type 
    // - with argument and without return type 
    // - without argument and with return type 
    // - with argument and with return type 

// 6) Generator Function. 

// 7) recursion. 

// 8) Callback Function. 

// 9) Higher Order Function. 

// 10) Getter and Setter 




///////////////////////////////////
// function name 

// without arg and without rtn 
// // 3). Write a program in C to display the first n terms of the Fibonacci series.
        //- Fibonacci series 0 1 1 2 3 5 8 13 .....


///////////////////////////

// function Expression  
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.