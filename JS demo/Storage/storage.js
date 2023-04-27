console.log('Storage Page');

var person = {
    firstName: "Varshini",
    lastName: "Saravanan",
    age: 21,
    role : "Developer",
    
}
var a = 2045

//Local Storage  -  setting a js obj in local storage
//Must be a string, or it will convert it into string

var stringifyObj = JSON.stringify(person)
console.log(stringifyObj);
localStorage.setItem('person1',stringifyObj)
localStorage.setItem('val1',a)
var getPersonStr = localStorage.getItem('person1')
var getPersonObj = JSON.parse(getPersonStr)
console.log(getPersonObj);
console.log(typeof getPersonObj);

var v = document.getElementById('inputText');
function get(){
    var vart=v.value;
    localStorage.setItem('val',vart)

}
v.value = localStorage.getItem('val')

// var input = document.getElementById("inputText")
// input.value = localStorage.getItem('val')

// input.addEventListener('keyup',(event)=>{
//     localStorage.setItem('val',event.target.value)
// })
 

//remove particular data
localStorage.removeItem('val1')
//Clear localstorage
localStorage.clear()


