// const testArr=[]

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data)=>data.json())
// .then((jsondata)=>testArr=jsondata)
// .catch(console.log('err'))

// console.log(testArr);

const arr=[1,2,3,4,5];
//map()
mapped_arr=arr.map((i)=>i+3);
console.log(mapped_arr);
//filter()
filter_arr=arr.filter((i)=>i>3);
console.log(filter_arr);
filter_arr=arr.filter(()=>true);
console.log(filter_arr);
//include()
console.log(arr.includes(3));//true
console.log(arr.includes(2,4));//false
console.log(arr.includes(2,1));//true

const objArr=[{i:1},{i:2},{i:3}]
console.log(objArr.includes({i:2}));//false
console.log(objArr[1]);
console.log(objArr[1]==={i:2});//false