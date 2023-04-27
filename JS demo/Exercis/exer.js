console.log("Exercise page");

var arrInput = document.getElementById("div1");
console.log(arrInput);
// Looping over array and printing
var arr = ["Ganga", "Abisha", "Lavanya"];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Checking equal array

// a == b // false (reference)
// a === b // false (refernce with value)

var a = [1, 2, 3, 22];
// var a12 = a;
var b = [1, 2, 3, 22];
// console.log(a == a12);
var count = 0;
if (a.length == b.length) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      count++;
    }
  }
  if (count == a.length) {
    console.log(`Checking equal array of ${a} and ${b} Equal Array`);
  } else {
    console.log(`Checking equal array of ${a} and ${b}  not Equal Array`);
  }
} else {
  console.log(`Checking equal array of ${a} and ${b}  not Equal Array`);
}

// Array to object
let arr1 = ["a", "b", "c", "d"];

console.log("Array to Object");
let [a1, a2, a3, a4] = arr1;
var obj = {
  A: a1,
  B: a2,
  C: a3,
  D: a4,
};
console.log(obj);
