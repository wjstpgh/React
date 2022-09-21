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
//find()
find_arr=arr.find(x=>x===4);
console.log(find_arr);
console.log(arr.find(x=>x>3));//4
//reduce()
reduce_arr=arr.reduce((accumulator,currentElement)=>
                        accumulator+currentElement,0)
console.log(reduce_arr);
// reduce((a:저장공간,c:현재배열값)=>a+c,0:초깃값)
// 배열원소  저장공간  현재배열값  계산후저장공간
// 1 : 0+1 <<  0(초기값)   1           1
// 2 : 1+2 <<  1           2           3
// 3 : 3+3 <<  3           3           6
// 4 : 6+4 <<  6           4           10
// 5 : 10+5<<  10          5           15
// 최종결과 : 15
