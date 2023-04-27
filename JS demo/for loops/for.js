console.log(` "for,switch " js page`);


var arr_num1 = [12,32,11,44,22,54]
var person = {
    id :1001,
    name : "Varshini",
    role : "developer",
    age : 21,
    address : {
        city: "Bengaluru",
        doorNo: 342,
        locality: "HSR"
    }
   
}
//for loops in js

    //Normal for loop
    for(var i = 0;i < arr_num1.length;i++){
        console.log(arr_num1[i]);
        console.log(`The value of ${i}`) ; //  ` should use (' not use)
    }

    //for of loop
    for(var i of arr_num1){
        console.log(i);
    }

    //for in loop --> ** work for array of objects **
    for(var key in person){
        console.log(person[key]);
        console.log(`The value of ${key} is ${person[key]}`);
    }
        for(var key in person.address){
            console.log(person.address[key]);
            console.log(`The value of ${key} is ${person.address[key]}`);
        }

//Extra characteristics of array
var arr = [12,1,3,,,," ",,18]
console.log(`Arr.length` + arr.length);

  //Arrays with empty values as well as space
    // -- normal for
    for(var i = 0;i < arr.length;i++){
        
        console.log(`The value of ${i} is ${arr[i]}`) ;
    }
    // -- for of
    for(var i of arr){
        console.log(i);
    }
    // -- for in 
    console.log(`for in`);
    for(var key in arr){
        console.log(`The value of ${key} is ${arr[key]}`);
    }
  //Arrays without index
   
    arr[`element`] = "java"
    arr[`element`] = 1000
    console.log(`without index`);
    console.log(arr);
    for(var i = 0;i < arr.length;i++){
        
        console.log(`The value of ${i} is ${arr[i]}`) ;
    }
    for(var i of arr){
        console.log(i);
    }
    for(var key in arr){
        console.log(`The value of ${key} is ${arr[key]}`);
    }

//Switch case
var choice = 20
switch(choice){
    case 1 : console.log("ONE"); break
    case 2 : console.log("TWO"); break
    case 3 : console.log("THREE"); break
    case 4 : console.log("FOUR"); break
    default : console.log("DEFAULT");
}

//const value cant change
//let value cant change outside block can access
//var value can change everywhere as wee access
     
// const a = 0;
// a = 1999
// console.log(a);
if(1){
    let b = 2
    b = 2222
    console.log(b);
}
b = 3
console.log(b);

