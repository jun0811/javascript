// 1. Client x,y : 현재 화면에서의 떨어진 거리(x,y)
// 2. Page x, y : 전체 문서 (안보이는 부분까지)의 원점에서부터의 x,y 

const special = document.querySelector('.special')

special.addEventListener('click',(e)=>{
  console.log(special.getBoundingClientRect())
  console.log(e.clientX, e.clientY)
  console.log(e.pageX, e.pageY)
})