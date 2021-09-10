const scrollUp = document.getElementById('scrollUp')
const gotoScroll = document.getElementById('gotoScroll')
const gotoSpecial = document.getElementById('gotoSpecial')

const specialBox = document.getElementById('special')

scrollUp.addEventListener('click',()=>{
  // window.scrollTo(0,window.scrollY-100)
  window.scrollBy(0,100)
})
gotoScroll.addEventListener('click',(e)=>{
  window.scrollTo(0,100)
})

gotoSpecial.addEventListener('click', ()=>{
  specialBox.scrollIntoView();
})