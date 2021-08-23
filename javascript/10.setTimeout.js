// setTimeout

// setTimeout(fn,시간,함수에 들어갈 변수)

setTimeout((item)=>{
  console.log(item)
},1000,"mike") // 1초 후 mike 출력 

let num = 0;

function timer () {
  console.log(`시간 : ${num++}`)
  if (num>5) clearTimeout(tid);
}

const tid = setInterval(timer,1000)