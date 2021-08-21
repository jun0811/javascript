// 생성자 함수 
function User(name,age) {
  // this = {} 가 있는거나 마찬가지 
  this.name = name;
  this.age = age;
  // return this  -> new 를 붙이면 생기는 것 
}
let user1 = new User("mike", 30);
console.log(user1)

// 예시2  
function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log(`가격은 ${price}입니다`)
  }
}

let movie = new  Item("부캠", 3000)
movie.showPrice()



