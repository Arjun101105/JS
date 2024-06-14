const marvel_heros = ["thor", "iron-man", "spider-man", "dr. strange"]
const dc_heros = ["batman", "super-man", "flash", "arrow"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
console.log(all_new_heros);

const tricky_array = [1, 2, 3, 4, [5, 6, 7], 8, 9, [5, 6, 7, [8, 9]]]

const usable_array = tricky_array.flat(Infinity) // here u need to specify depth of the array to be flattened ... but we can also use infinity

console.log(usable_array);

console.log(Array.isArray("Arjun")); // checks whether the following is an array or not
console.log(Array.from("Arjun")); // converts it into an array

let num1 = 100
let num2 = 200
let num3 = 300 

console.log(Array.of(num1, num2, num3));