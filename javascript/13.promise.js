// Promise 
/**
 * 이벤트가 완료되었을때, 결과를 전달 
 */
                         //성공 ,  실패 
// const pr = new Promise((resolve, reject) => {
//   //code
// })

// const pr = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("OK")
//   },1000)
// })

// pr.then((result)=> {
//     console.log(result + ' 가지러가자!!')
//   })
//   .catch((err)=> console.log("out"))
//   .finally(()=> console.log('---finish---'))

// promise 본격 예제 
const f1 = () => {
  return new Promise((res,rej)=> {
    setTimeout(()=>{
      res('1번주문');
    },4000)
  })
}

const f2 = (message) => {
  console.log(message)
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('2번주문');
    },3000)
  })
}

const f3 = (message) => {
  console.log(message)
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('3번주문');
    },2000)
  })
}

console.log('시작')

// f1().then((res)=>f2(res))
//     .then((res)=>f3(res))
//     .then((res)=>console.log(res))

// promise all 
console.time('x1')
Promise.all([f1(),f2(),f3()])
.then((res)=> {
  console.log(res)
  console.timeEnd('x1')
})

//promise race : 먼저 끝나는 것 나오면 종료 
Promise.race([f1(),f2(),f3()])
.then((res)=>
console.log(res))