console.log("FETCH - async, await ");
console.log("Start");

//fetched data from static js file
async function getData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    //b4 (fetch)async methods
    //gets value from REST API
    //returns of type promise
    //it is a default method of returning promise
    .then(async (response) => {
      console.log(response);
      const data = await response.json(); //b4 json method
      console.log(data);
      //   var map1 = (i) => {
      //     return document.getElementById("div1").innerHTML = `<p>${data[i].name}</p>`;
      //   };
    })
    .catch((error) => {
      console.log(error);
    });
}
getData();

console.log("End");

//Class Creation
class class1 {
  constructor(a) {
    this.a = a;
    console.log("Inside class");
  }
}
const c1 = new class1(200);
console.log(c1.a);
