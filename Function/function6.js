//    - Lexical Scope.
//    - Block Scope Vs Function Scope.

// var a = 12;
// function Outer(){
//     var a = 100;
//     console.log("Outer start");
//     function Inner(){
//         console.log("Inner start");
//         console.log("Value of A in Inner Function: ",a);
//     }
//     Inner();
//     console.log("Value of A in Outer Function: ",a);
// }
// Outer();
// console.log("Value of A Out Side Main Function: ",a);


// block scope
// {
//     var a = 12;
//     let b = 13;
//     const c = 14;
//     console.log("Inner Block: ",a);
//     console.log("Inner Block: ",b);
//     console.log("Inner Block: ",c);
// }
// console.log("Outer Block: ",a);
// console.log("Outer Block: ",b);
// console.log("Outer Block: ",c);




// function scope
// var all =()=>{
//     var a = 12;
//     let b = 13;
//     const c = 14;
//     console.log("Inner Block: ",a);
//     console.log("Inner Block: ",b);
//     console.log("Inner Block: ",c);   
// }
// all();
// console.log("Outer Block: ",a);
// console.log("Outer Block: ",b);
// console.log("Outer Block: ",c);

// if(1){
//     var a = 12;
//     let b = 13;
//     const c = 14;
//     console.log("Inner Block: ",a);
//     console.log("Inner Block: ",b);
//     console.log("Inner Block: ",c);  
// }
// console.log("Outer Block: ",a);
// console.log("Outer Block: ",b);
// console.log("Outer Block: ",c);


// for (let i = 0; i <=5; i++) {
    //     console.log(i);
// }
// console.log("Outer :",i);


// console.log(a);
// const a = 12;
////////////////////////////////////////////////////////////////////////
//    - Default Parameters.
//    - Rest Parameters.
//    - Parameter Destructuring.



// function All(n1){  //perameter
//     console.log(n1);
// }

// All(12);//argument 


// function Add(n1,n2=0){  // n2=0   default Perameter
//     console.log(n1+n2);
// }
// Add(12,13);


// function All(n1,n2,...restperameter){  
//     console.log(n1+n2);
//     console.log(restperameter);
// }

// All(12,13,11,14,15,16);




function All(n1,n2,...Arr){
    var [v1,v2] = Arr;
    console.log(n1+n2);
    if(n1+n2>30)
    {
        console.log("Second Addition : ",v1+v2);
    }
}

All(22,13,11,14,15,16);