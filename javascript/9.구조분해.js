let a = 1;
let b = 2;
[a,b] = [b,a]

console.log(a,b) // 2, 1 

let obj = {name: "mike", age: 18};

const {name, age} = obj
const {name: userName, age:userAge} = obj
console.log(name,age);
console.log(userName,userAge);