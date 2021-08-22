/**
 * symbol  :  유일성 보장 
 * key, value 메소드에서 제외 됨 
*/

const id = Symbol("id"); 
const id2 = Symbol("id"); 
// console.log(id===id2) -> false

const item = {
  name : "pen",
  price : "300"
}
const tmp = Symbol("id");
item[tmp] = 'myid'

item.name = 'aaa'

console.log(item.name)

