console.log("Array Methods JS PAGE");

var arr_hete = [19, 34, "hello", false, null, undefined];
console.log(`====`);

//foreach
arr_hete.forEach(function (val, ind) {
  //anonymous
  console.log(ind);
  console.log(val);
  console.log(`The value at ${ind} is ${val}`);
});
console.log(`=======`);
arr_hete.forEach((val, ind) => {
  //arrow
  console.log(ind);
  console.log(val);
  console.log(`The value at ${ind} is ${val}`);
});
console.log(`=======named function`);
arr_hete.forEach(function add(val, ind) {
  console.log(ind);
  console.log(val);
  console.log(`The value at ${ind} is ${val}`);
});
function arrrr(val, ind) {
  console.log(ind);
  console.log(val);
  console.log(`The value at ${ind} is ${val}`);
}
console.log(`=======diff of named func call`);
arr_hete.forEach(arrrr);

//is array
var result = Array.isArray(arr_hete);
console.log(result);

//element present
var arr_present = [];
var result = arr_present.includes();
console.log(`element present ${result}`);
var result = arr_hete.includes(34, 1); //number with index
console.log(result);

//push
var result = arr_present.push("1000000", true);
console.log(`The no of elements pushed ${result}`); //count of no of elements pushed
console.log(`array = ${arr_present}`); // arr containing only pushed elements

//pop
var result = arr_present.pop();
console.log(`The no of elements popped ${result}`); //return boolean
console.log(`array = ${arr_present}`); //arr after popping

//shift methods - popping from front
var result = arr_hete.shift();
console.log(`The elements popped front ${result}`); //returns element
console.log(`array = ${arr_hete}`); // result array after methods

//unshift methods - push from front
var result = arr_hete.unshift("javascript");
console.log(`The no of elements pushed front ${result}`); //returns length
console.log(`array = ${arr_hete}`); // result array after methods
// console.log(arr_hete);

//replacing an element in js array
console.log(`=========`);
console.log(arr_hete);
var alteredArray = arr_hete.splice(1, 2, "java", null);
// console.log(alteredArray); // returns the portion of main arr which we altered
// console.log(arr_hete);
console.log(`Altered array = ${alteredArray}`);
console.log(`MainArray = ${arr_hete}`); //changing original array

//slicing
console.log(`=========slicing`);
console.log(arr_hete);
var alteredArray = arr_hete.slice(1, 4);
console.log(alteredArray);
console.log(arr_hete); //not changing original array

//join method
console.log(`=========join`);
console.log(arr_hete);
var alteredArray = arr_hete.join("|");
console.log(alteredArray);
console.log(arr_hete);

//map method
var num_arr = [100, 202, 308, 400]; // empty spaces ==> doesnt account
console.log(`=========map`);
console.log(num_arr);
var alt_arr = num_arr.map(function (value) {
  return value + 10;
});
console.log(alt_arr);
console.log(num_arr);

//filter method
console.log(`=========filter`);
console.log(num_arr);
var alt_arr = num_arr.filter((value) => {
  if (value % 10 == 0) {
    return true; //true false is possible
  } else {
    return false;
  }
});
console.log(alt_arr);
console.log(num_arr);

//indexof
console.log(`=========indexof`);
var result = num_arr.indexOf(400);
console.log(result);
