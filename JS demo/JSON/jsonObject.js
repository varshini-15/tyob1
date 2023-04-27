var person = {
    firstName: "Varshini",
    lastName: "Saravanan",
    role : "developer",
    designation : "team lead",
    gender : null,   // taking
    age : undefined, // not taking
    getFullName: function () {  //not taking
        return this.firstName
    }
}
console.log(person);

//Stringify - object to string
var stringfileobj = JSON.stringify(person) 
console.log(stringfileobj);
console.log(typeof stringfileobj);

//Parse - String to Object
var objfilestring = JSON.parse(stringfileobj)
console.log(objfilestring);
console.log(typeof objfilestring);

