// 1. async를 붙이면 Promise
async function getName() {
  return "Mike";
}
// 따라서 then 사용가능
// getName().then((res)=> {
//   console.log(res)
// })

// 2. 반환이 promise인 경우
async function getName2() {
  return Promise.resolve("Tom");
}

// getName2().then((res)=> {
//   console.log(res)
// })

function awaitFunc(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 2000);
  });
}

async function showName() {
  const res = await awaitFunc("jun");
  console.log(res);
}

// console.log("시작");
// showName();

// 13번 함수들 async로 바꾸기
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번주문");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번주문");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번주문");
    }, 2000);
  });
};
// 예외 처리는 항상 try catch 로
async function order() {
  try {
    const res1 = await f1();
    const res2 = await f2(res1);
    const res3 = await f2(res2);
    console.log(res3);
  } catch (error) {
    console.log(error);
  }
}
order();
