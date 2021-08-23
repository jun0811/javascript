// es6 추가 

class User {
  constructor(name,age){
    // 객체를 생성해주는 메소드
    this.name = name;
    this.age = age;
  }
  showName = () => {
    console.log(this.name)
  }
}

const Tom = new User('tom', 19)
Tom.showName()

// extends 

class Car {
  constructor(color){
    this.color = color
    this.wheels = 4;
  }
  drive() {
    console.log('drive...')
  }
  stop(){
    console.log('STOP!')
  }
}

class Bmw extends Car {
  constructor(color){
    // super로 부모 constructor를 실행해줘야함 
    super(color)

    this.wheels = 10;
  }
  park (){
    console.log('park')
  }
}

const x3 = new Bmw('blue')

console.log(x3)
x3.drive()