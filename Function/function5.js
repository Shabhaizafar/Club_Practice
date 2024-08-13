//    - Function declarations/Name Function are hoisted : 

// All();

// function All(){
//     console.log("Hello Everyone!!!");
// }



// All();
// var All = ()=>{
//     console.log("Hello Everyone!!!");
// }

/////////////////////////////////////////////////
//    - Function inside function. 

// function outer(){
//     function inner(){
//         console.log("Inner");
//     }
//     inner();
//     console.log("Outer");
// }
// outer();


////////////////////////////////////////////
//    - Lexical Scope.
//    - Block Scope Vs Function Scope.
var a = 12;
function outer(){
    var a = 100;
    function inner(){
        console.log(a);
    }
    inner();
}
console.log(a);
outer();





///////////////////////////////////////////////////////////////////
//    - Default Parameters.
//    - Rest Parameters.
//    - Parameter Destructuring.