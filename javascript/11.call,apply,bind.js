// call

const tom = {
  name: "Tom"
}

const joy = {
  name: "Joy"
}

function showName (num){
  for(i=0;i<num;i++) console.log(this.name)
}

showName.call(tom,1)
showName.call(joy,2)

function update(birthday, occupation) {
  this.birthday = birthday
  this.occupation = occupation
}

update.call(tom,1999,'teacher')
update.apply(joy,[2119,'police'])  // apply 는 배열로 넣어서 하나씩 들어가진다....
console.log(tom) //{ name: 'Tom', birthday: 1999, occupation: 'teacher' }
console.log(joy) //{ name: 'Joy', birthday: 2119, occupation: 'police' }  

// bind 
const updateTom = update.bind(tom)  // tom만 this로 받는 함수 생성
updateTom(1991,"solder")
console.log(tom)