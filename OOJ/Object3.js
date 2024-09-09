// How to Create a Multiple Objects Using Function : 
function Person(fname,lname,age){
    var user = {};
    user.FirstName = fname;
    user.LastName = lname;
    user.Age = age;
    user.bioData = function (){
        console.log(`My Name is ${user.FirstName} ${user.LastName}.and I'm ${user.Age} Years Old.`);
    }
    return user;
};

var obj1 = Person("Rakesh","Shah",30);
console.log(obj1);
obj1.bioData();


var obj2 = Person("Ajay","Sharma",20);
console.log(obj2);
obj2.bioData();
