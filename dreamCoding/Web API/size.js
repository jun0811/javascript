const box = document.getElementById('box');

// innerHeight, innerWidth 

//screen.width  screen.height

// outerHeight, outerWidth

// 1. size 변경 이벤트 resize
box.innerHTML = `ddsadsa`
const resizeEvent = () => {
  box.innerHTML = `
    window.screen = ${window.screen.width}, ${window.screen.height} <br>
    window.inner = ${window.innerWidth}, ${window.innerHeight} \n <br>
    window.outer = ${window.outerWidth}, ${window.outerHeight} \n <br>
    document : ${document.documentElement.clientWidth}, ${document.documentElement.clientWidth}
    `
}

window.addEventListener('resize', ()=>{
  resizeEvent()

}) 

resizeEvent()