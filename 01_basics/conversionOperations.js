let score = 33
let points = "33abc"
let zero = null 
console.log(typeof score)
console.log(typeof points)

let ValInNum = Number(points)
let ValueInNum = Number(zero)

console.log(typeof ValInNum)
console.log(ValInNum) // NaN => not a number
console.log(ValueInNum)

// undefined returns value NaN
// boolean returns 1/0 true or flase

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0=> false
// "" => false
// "Arjun" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
