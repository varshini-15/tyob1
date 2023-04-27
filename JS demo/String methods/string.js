console.log(`String methods`); // **** ---- immutable ---- ****

var str = "Javascript"

//Uppercase & Lowercase
var upperstr = str.toUpperCase();
console.log(str);
console.log(upperstr);
var lowerstr = str.toLowerCase();
console.log(str);
console.log(lowerstr);

//charAt() - Access character
var char = str.charAt(2)
console.log(`Character at position 2 is ${char}`);

//indexOf()
var char = str.indexOf('c')
console.log(`Index of c in Javascript is ${char}`);

//Replace a character
var char = str.replace('a','*')
console.log(char);

//Replace all characters
var char = str.replaceAll('a','*')
console.log(char);

//
// if(1){
//     const b = 100;
//     console.log(`const b : ${b}`);
// }  
// let a = 100;
// console.log(`const b : ${a}`); 
// a = 122
// console.log(`const b : ${a}`);

//includes
var char = str.includes('a')
console.log(char);

//concat
var str_concat = str.concat(' Language')
console.log(`Concatenated : ${str_concat}`);

//Substring 
var char = str.substr(2,6) //substr(startindex, length)
console.log(`Substring (substr) ${char}`);
var char = str.substring(2,6) //substr(startindex, endindex)
console.log(`Substring (substring) ${char}`);

//Remove spaces b4 & end of string
var strin = '      java,    is,  lang   '
var trimmed_str = strin.trim();
console.log(`${trimmed_str}is`);
var trimmed_str = strin.trimStart(); //trimming first
console.log(`${trimmed_str}is`);
var trimmed_str = strin.trimEnd();  //trimming end
console.log(`${trimmed_str}is`);

//Split method
var result = strin.split('a')
console.log(result);

// reverse a string
var name = "Varshini Saravanan"
var reversed_name = " "
var reversed = function(name){
    for(var i = name.length - 1;i >= 0;i--){
        reversed_name = reversed_name.concat(name.charAt(i)) 
    }        //reversed_name += concat(name.charAt(i))
    return reversed_name
}

console.log(reversed(name));

//variable hoisting
console.log(a);
var a = 10;


