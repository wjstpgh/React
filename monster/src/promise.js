const myPromise=new Promise((resolve,reject)=>{
    if (true){
        setTimeout(()=>{
            resolve('success');
        },1000);
    }
    else{
        reject('fail');
    }
})

myPromise
.then(value=>value+'!!')
.then(value=>console.log(value))
.catch(reject=>console.log(reject));