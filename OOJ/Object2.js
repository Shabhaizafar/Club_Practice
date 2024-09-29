// How to Create a Single Object Using Function : 
function Person(){
    var user = {};
    user.FirstName = "Raj";
    user.LastName = "Shah";
    user.Age = 12;
    user.bioData = function (){
        console.log(`My Name is ${user.FirstName} ${user.LastName}.and I'm ${user.Age} Years Old.`);
    }
    return user;
};

var obj1 = Person();
console.log(obj1);
obj1.bioData();