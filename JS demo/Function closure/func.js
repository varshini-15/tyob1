console.log('Function Closure');

function displayNumber(){
    var var1 = 1
    function checkNumber(){
        console.log(var1);
        console.log('inner function');
    }
    var1++;
    // console.log(var1);
    return checkNumber()

}
displayNumber()
// console.log(displayNumber());  
// this cant be bcz outer function returns inner function 
// and there log is printing out --- OP => undefined


//CALLBACK FUNCTION



function displayName(name, callback){       
    // displayCall 
    // can be passed but only that function be executed
    console.log("Hii",name);
    console.log('Inside display number');
    callback(); 
    // displayCall();
}
function displayCall1(){
    // console.log(name);
    console.log('Inside Callback1');
}
function displayCall2(){
    // console.log(name);
    console.log('Inside Callback2');
} 
displayName("VArshini",displayCall1)
displayName("VArshini",displayCall2)

