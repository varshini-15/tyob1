console.log("ES6 Features");

// 1. let and const scope
let let_val = 200;
if (let_val > 20) {
  let let_val = 13;
  console.log(` let - Inside if block ${let_val}`);
}
// let let_val = 300 -- not possible
let_val = 300;
console.log(`let - Outside if block ${let_val}`);

const const_val = 200;
if (const_val > 20) {
  // const const_val = 13;  -- not possible
  console.log(`const - Inside if block ${const_val}`);
}
// let let_val = 300 -- not possible
// const_val = 300 -- not possible
console.log(`const - Outside if block ${const_val}`);

// 2. Object and array destructuring
var product = {
  name: "Book1",
  price: 2000,
  description: "good",
  id: 2001,
  options: ["hardcover", "paperback", "ebook"],
  author: {
    name: "John",
    id: 1000,
  },
};

// var name = product.name;
// console.log(name);

let {
  name: prdtName,
  price: prdtPrice,
  description: prdtDesrc,
  id: prdtId,
} = product;
console.log(`The product name is ${prdtName}`);

let { page, price, options } = product; ///having same names
console.log(options);

// var a = product.name;  --( similar to this -- ES6 features)
// console.log(a);

var arr1 = [12, 345, 231, null, undefined, "rtfgh"];
let [n1, n2, n3, null1, undef, str] = arr1;
console.log(n1);

//accessing array of keys in object
let {
  options: [option1, option2, option3],
} = product;
console.log(option1);
// console.log(options);  - not possible

//accessing object of keys in object
let {
  author: { name, id: authorId },
} = product;
console.log(name);

//spread operator (immutable to mutable)
var emp = {
  name: "Varsh",
  role: "developer",
  id: 001,
};
var emp_spread = { ...emp }; //changes in emp will not affect emp_spread
console.log(emp);
console.log(emp_spread);

//Rest operator
var sum1 = 0;
function displaySum(...sumarr) {
  for (let i = 0; i < sumarr.length; i++) {
    sum1 += sumarr[i];
  }
  return sum1;
}
console.log(displaySum(10, 20, 244));
console.log(displaySum(10, 20, 24, 3456784));

//default parameters
function displayDefVall(a, b = "str") {
  console.log(a);
  console.log(b);
}
displayDefVall(100);

function displayMulval(n1, n2 = 2) {
  return n1 * n2;
}
console.log(displayMulval(100, 89));
console.log(displayMulval(200));

function displayMulvalues(n1, n2 = 2, n3 = 6) {
  return n1 * n2 * n3;
}
console.log(displayMulvalues(1));
console.log(displayMulvalues(1, 33, 5));
console.log(displayMulvalues(1, 8));
