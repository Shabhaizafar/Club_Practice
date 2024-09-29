// How to Create a Multiple Objects Using Function : 
function Person(fname,lname,age){
    var user = Object.create(Person.prototype);
    user.FirstName = fname;
    user.LastName = lname;
    user.Age = age;
    return user;
};
Person.prototype = {
    bioData : function (){
        console.log(`My Name is ${this.FirstName} ${this.LastName}.and I'm ${this.Age} Years Old.`);
    },
    is18 : function (){
        console.log("sert");
    }
};

var obj1 = Person("Rakesh","Shah",30);
console.log(obj1);
obj1.bioData();

obj1.is18();

var obj2 = Person("Ajay","Sharma",20);
console.log(obj2);
obj2.bioData();