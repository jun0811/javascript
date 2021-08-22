// Array
// 1. arr.splice(n,m) : 특정 요소 지움  , 삭제 된 요소 반환 
let arr = [1,2,3,4,5]
arr.splice(1,2); // 인덱스 1부터 2개 제거 
console.log(arr) // 1,4,5

arr.splice(1,1,100); // 100을 추가
console.log(arr); // 1,100,5

let arr2 = ["나는", "철수", "입니다."]
arr2.splice(1,0,"대한민국 사람") // 아무것도 안지우고 추가 
console.log(arr2)

// arr.slice(n,m) : n부터 m가지 반환 

let arr3 = ["a","b","c"];
let tmp = arr3.slice(); // 복사
console.log(tmp);
tmp[0] = "d";
console.log(tmp); // [ 'd', 'b', 'c' ]
console.log(arr3); // [ 'a', 'b', 'c' ]

// arr.concat(arr2,arr3) : 합쳐서 새배열 반환 

// arr.forEach(fn) : 배열 반복 
let users = ['mike', 'tom', 'jane'];
users.forEach((item, idx) => {
  console.log(item, idx)
}) 
/* 
mike 0
tom 1
jane 2 */

// indexOf , lastIndexOf  :  있으면 인덱스, 없으면 -1 반환

// filter : 찾아서 배열로 반환

// join, split
let name = ["철수", "민희", "재준"]

let sp = name.join("-") // 철수-민희-재준
console.log(sp.split("-")) //[ '철수', '민희', '재준' ]