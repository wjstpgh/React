const pureFunc=(a,b)=>{
    return a+b;
}
console.log(pureFunc(2,4));

let c=3;
const funcA=(a,b)=>{
    return a+b+c;
}
console.log(funcA(2,4));//9
//impure func
c=5
console.log(funcA(2,4));//11

d=3
const funcB=(a,b)=>{
    c=a+b;//side effect
    return a*b;
}
console.log(funcB(2,4),c)//8,6
