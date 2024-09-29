const AllMethods = {
    bioData : function (){
        console.log(`My Name is ${this.FirstName} ${this.LastName}.and I'm ${this.Age} Years Old.`);
    },
    is18 : function (){
        console.log("sert");
    }
}
// How to Create a Multiple Objects Using Function : 
function Person(fname,lname,age){
    var user = {};
    user.FirstName = fname;
    user.LastName = lname;
    user.Age = age;
    user.bioData = AllMethods.bioData;
    user.is18 = AllMethods.is18;
    return user;
};

var obj1 = Person("Rakesh","Shah",30);
console.log(obj1);
obj1.bioData();

obj1.is18();

var obj2 = Person("Ajay","Sharma",20);
console.log(obj2);
obj2.bioData();