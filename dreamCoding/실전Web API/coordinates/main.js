const target = document.querySelector('.target');
const horizontal = document.getElementById('horizontal');
const vertical = document.getElementById('vertical');
const tag = document.querySelector('.tag');


window.addEventListener('mousemove',(e)=>{
  tag.innerText= `${e.clientX}px, ${e.clientY}px`
  // horizontal.
  horizontal.style.top = `${e.clientY}px`
  vertical.style.left = `${e.clientX}px`
  target.style.top = `${e.clientY}px`
  target.style.left = `${e.clientX}px`
  tag.style.top = `${e.clientY}px`
  tag.style.left = `${e.clientX}px`
})