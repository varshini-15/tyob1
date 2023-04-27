console.log('BOM Page');

//alert
window.alert('Hello Guys!This is BOM Page')

//confirm
var result = window.confirm('Do you want to move from this page?')
if(result){
    document.getElementById('div1').innerHTML = `<h3>New Page</h3>`
} else{
    document.getElementById('div1').innerHTML = `<h3>Previous Page</h3>`
}

//prompt
var prompt_val = window.prompt('Enter a random number')
console.log(prompt_val);
if(prompt_val > 10){
    window.close();
}

//window object properties
console.log(window.innerHeight);
console.log(window.innerWidth);

//history obj
console.log(window.history);

//navigator
console.log(window.navigator);

//
console.log(window.navigator.geolocation);

//
console.log(window.location);