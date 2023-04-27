console.log("This is external page");

// creation of objects - directly
var person = {
  firstName: "Varshini",
  lastName: "Saravanan",
  age: 21,
  getFullName: function () {
    return this.firstName;
  },
  address: {
    city: "Bengaluru",
    doorNo: 342,
    locality: "HSR",
  },
};
var p = person.firstName;

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.getFullName());
console.log(person.address.city);
console.log(person);

//creation of objects using object class constructor
var user = new Object();
user.firstName = "Varsh";
user.role = "Developer";
console.log(user.firstName);
console.log(user);

//array creation
var arr = [2345, 6789, 67890];
var arr1 = ["varsh", 45678, true]; //hetergeneous
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr1);

//arrays of objects
var users = [
  {
    name: "Varsh",
    age: 21,
  },
  {
    name: "Dharsh",
    age: 11,
  },
  {
    name: "Vetri",
    age: 13,
  },
];
console.log(users);
console.log(users[1]);

//Creating object with array constructor
var emp = new Array(100, "Varsh", true);
console.log(emp + "======");

var user1 = [67, 89, 23];
var user2 = user1;
user1.pop();
console.log(user1);
console.log(user2);

var user1 = [67, 89, 23];
var user2 = Object.assign({}, user1);
user1.pop(); //usr2 pop not allowed
console.log(user1);
console.log(user2); //

var user2 = { ...user1 };
user2.age = 20;

var user2 = [...user1];
user2.age = 20;

var arr2 = [12, 34, 4];
var arr3 = arr1.concat();
arr2.pop();
console.log(arr2);
console.log(arr3);

//Date Object
var date_now = new Date();
var date = new Date(2001, 8, 15); //0 - january 0 - sunday
console.log(date);

var date_mill = new Date(0);
console.log(date_mill);

var date_str = new Date("12 jan 2020");
console.log(date_str);

//Methods of Date Object
console.log(date_str.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getTime() + " ==========");

console.log("Age" + (date_now.getFullYear() - date.getFullYear()));
console.log("Age with month :" + (date.getMonth() - date_now.getMonth()));

//Math Object

console.log("========= Math OBJECT =======");
console.log(Math.PI);
console.log(Math.round(3.4));
console.log(Math.sqrt(16));
console.log(Math.pow(4, 3));
console.log(Math.abs(-67.368));
console.log(Math.ceil(2.2)); // nearest higher number
console.log(Math.ceil(-2.2)); // 2 is greater
console.log(Math.floor(9.8));
console.log(Math.floor(-9.8));
console.log(Math.max(99, 45, 789));
console.log(Math.min(99, 45, 789));
console.log(Math.round(Math.random() * 10));

//Functions
console.log("===Functions===");

//Named functions
function add(a, b) {
  return a + b;
}
console.log(add(4567, 56789));

//Anonymous function
var add1 = function (a, b) {
  return a + b;
};
var hh = function () {
  console.log("indexjs");
};
hh();
console.log(add(1, 5));
console.log(add1);
console.log(typeof add1);

//IIFE
(function () {
  console.log("IIFE");
})();

(function (a, b) {
  console.log(a + b);
})(2, 5);

//Arrow function
var a = (x, y) => {
  return x + y;
};
//Arrow function with single parameter
var a = (x) => {
  return x + 1;
};

console.log(a(45, 90));
