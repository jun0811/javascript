# 공부

## 짜잘한 팁 

### CSS 
1. overflow: hidden; 
   : 문서 전체에 멕이면 스크롤이 없어짐.


### Scroll
```
scrollUp.addEventListener('click',()=>{
  window.scrollBy(0,100) // 100씩 업 
})
gotoScroll.addEventListener('click',(e)=>{
  window.scrollTo(0,100) // 100으로 
})

gotoSpecial.addEventListener('click', ()=>{
  specialBox.scrollIntoView(); // 특정 위치로~
})
```



### 윈도우 load 

1. DOMContentLoaded 
: document가 로드 되면

2. load
: after css, images loaded 

3. beforeunload 
: 페이지에서 나가기 직전

4. unload
: 페이지에서 나간 후 