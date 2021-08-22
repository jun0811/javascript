/**
 * 객체 메소드
 * assign, keys, values, entries, fromEntries
 */

const User = {
  name : "승준",
  age : "29"
}

const newUser = Object.assign({},User)
// console.log(newUser);

console.log(Object.keys(newUser))
console.log(Object.values(newUser))
console.log(Object.entries(newUser))

/* [ 'name', 'age' ]
[ '승준', '29' ]
[ [ 'name', '승준' ], [ 'age', '29' ] ] */