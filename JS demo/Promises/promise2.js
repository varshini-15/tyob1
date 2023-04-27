console.log('Promises 2')

const promise = new Promise((resolve,reject) => {
    if(30 > 20){
        var data = [100,200,300]
        resolve(data)
    } else{
        reject('wrong & rejected')
    }
})

promise.then((result) => {
    const filteredData = result.filter((data)=>{
        const dataFlag = data > 150
        return dataFlag
    })
    console.log(filteredData);
}).catch((error) => {
    console.log(error);
})

console.log('End');