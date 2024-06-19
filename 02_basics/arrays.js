// Arrays

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["black-panther", "iron-man", "spider-man", "batman", "flash"]

const myArr2 = [1, 2, 3, 4]

// Array methods

myArr.push(6) // adds / pushes a value into your array
myArr.push(7)
console.log(myArr);


myArr.pop() // pops / removes the last element from your array

console.log(myArr);

myArr.unshift(7) // adds an element in the 0th position thereby shifting all elements by one.
console.log(myArr);

myArr.shift() // removes 0th element from your array
console.log(myArr);

const newArr = myArr2.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr2);
console.log(newArr);
console.log(typeof(newArr));


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);