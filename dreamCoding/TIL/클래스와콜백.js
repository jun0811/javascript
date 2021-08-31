// class 

class Counter {
  // 자체적인 변수 생성 
  constructor (runFiveTimes){
    this.counter = 0;
    this.callback = runFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter)
    if(this.counter % 5 ===0) {
      this.callback && this.callback(this.counter)
    }
  }
}

const alertFive = (num) => {
  console.log(`num : ${num} `)
}

const coolCounter = new Counter(alertFive);
coolCounter.increase(); 
coolCounter.increase(); 
coolCounter.increase(); 
coolCounter.increase(); 
coolCounter.increase(); 