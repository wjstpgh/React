//currying
const multiply = (a, b) => a * b;
console.log(multiply(3, 4))//12

const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(3))//15