console.log(`DOM Page`);

// ***********************
//    Worked & Appended on HTML element

// GETELEMENT

//access HTML element by id
var element = document.getElementById(`div1`);
console.log(element);

//change HTML content
element.innerText = "This is the div1 content";
element.innerText = "This is the another div1 content";

//add HTML element
var secondelement = document.getElementById(`div2`);
secondelement.innerHTML = `<br><button>Log-In</button><br>
                            <br>      
                            <button>Register</button><br>`;

//apply style on html elements
element.style.color = "green";
element.style.textAlign = "center";
secondelement.style.backgroundColor = "bisque";
secondelement.style.fontSize = "30px";

//access HTML element by class
var elements = document.getElementsByClassName(`box`);
console.log(elements);

//target particular HTMl collection element
elements[2].innerText = "Third div";

//access HTML element by tag/HTML element
var elementTag = document.getElementsByTagName("p");
console.log(elementTag);
elementTag[0].style.color = "blue";
elementTag[0].style.fontWeight = "bold";

// QUERY SELECTOR

//Query Selector by id
var elementQueryID = document.querySelector(`#div4`);
console.log(elementQueryID);
elementQueryID.innerText = "This is Query Selector";

//Query Selector by class name
var elementQueryClass = document.querySelector(`.box`);
console.log(elementQueryClass);
elementQueryClass.style.fontWeight = "bold"; //first occurence changing

//Query Selector by tag
var elementQueryTag = document.querySelector(`p`);
console.log(elementQueryTag);
elementQueryTag.style.backgroundColor = "yellow";

//Query Selector by All
var elementQueryAllClass = document.querySelectorAll(`.box`);
console.log(elementQueryAllClass);
elementQueryAllClass[3].innerText = "This is fourth div";
elementQueryAllClass[3].innerHTML = `<br><button>Submit</button>`;

//Query Selector by tag
var elementQueryAllTag = document.querySelectorAll(`p`);
console.log(elementQueryAllTag);
elementQueryAllTag[1].style.backgroundColor = "green";

// ************************************

//Create HTML Element

//normal way
var createElement1 = document.createElement(`button`);
createElement1.innerText = "Create Element p";
document.body.appendChild(createElement1);

// //in particular position (*)
// var createElementinDiv6 = document.getElementById('div6')
// createElementinDiv6.innerHTML = `<button>Reg</button>`;
// div6.appendChild(createElementinDiv6);

//HTML element with ID & class name
var createEleWithIDClass = document.createElement("h1");
createEleWithIDClass.innerText = "This is P creation with id & class name";
createEleWithIDClass.className = "paragraph";
createEleWithIDClass.id = "p1";
document.body.appendChild(createEleWithIDClass);
console.log(document.body);

//remove
createElement1.remove();

//Event Handler

// on-click event
function display() {
  // document.getElementById('div3').innerText = "ON CLICK function - display button has been clicked";
  document.getElementById("div3").style.color = "blue";
}

// event from js alone
var inputField = document.getElementById("firstName");
// console.log(inputField);
inputField.addEventListener("keyup", (event) => {
  //binding it to input text
  console.log(event);
  if (event.key === "Enter") {
    console.log(`The value is ${event.target.value}`);
  }
});

//
var listele = document.getElementById("list1");
console.log(listele.firstChild);
console.log(listele.firstElementChild);
console.log(listele.lastElementChild);
console.log(listele.lastChild);

var a = 20000;
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
document.getElementById("div7").innerHTML = `<h4>${person.address.city}</h4>`;
document.write("hello world");
