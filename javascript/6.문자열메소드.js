// indexOf()
let desc = "hi, lee";

console.log(desc.indexOf("k"))
// 있으면 위치 index 반환, 없으면 -1
// 따라서, 조건문에 넣을떄 -1보다 큰가를 기준으로 코드를 작성 할것 


// sliece(n,m)
let desc = "abcdefg";

desc.slice(2) // "cdefg"
desc.slice(0,5) // "abcde"
desc.slice(2,-2) // "cde"

// substring(n,m) n ~ m 문자열 반환
// substr(n,m) : n부터 m개 \

desc.substr(2,4) // "cdef"

// trim() : 앞뒤 공백 제거 