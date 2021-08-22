// 1. sort 
// 문자열 기준으로 정렬 해서 숫자는 따로 로직이나 lodash를 사용해서 정렬;
const arr = [8,11,3,2,6];

const tmp = arr.sort((a,b)=>{
  return a-b
})
console.log(tmp)

const res = arr.reduce((pre,cur) => {
  return pre + cur;
}, 0)
console.log(res)