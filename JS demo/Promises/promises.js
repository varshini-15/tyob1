console.log('Promises - Asynchronous in nature');
console.log('Start============');

//definition of promises
//promises are objects to handle asynchronous calls
//pending, resolve, reject are states of promises
const promise = new Promise((resolve,reject) => {
    if(3 > 20){
        resolve('30 is greater than 20 and promises resolved')
    } else{
        reject('rejected')
    }
})

//listen to the promise
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

//definition of promises
const promise1 = new Promise((resolve,reject) => {
    if(30 > 20){
        resolve('30 is greater than 20 and promises resolved')
    } else{
        reject('rejected')
    }
});

//listen to the promise
promise1.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

function displayMsg(){
    console.log('Inside displaying method');
}

displayMsg()
console.log('End=============');