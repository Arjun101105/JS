// +++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++ 
const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // returns upto 2 decimal places

const newNum = 23.6969
console.log(newNum.toPrecision(3)); // rounds-up values .... expected output => 23.7

const secNum = 123.6969
console.log(secNum.toPrecision(3)); // expected output => 124

const hundred = 100000
console.log(hundred.toLocaleString());

// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // gives absolute value

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.min(4, 3, 6, 7 ,1)); // gives min value in an array ... similarly with math.max 

console.log(Math.random()); // always returns random value btwn 0 and 1

console.log((Math.random()*10) + 1); // now it returns a value btwn 0 and 10
console.log(Math.floor(Math.random()*10) + 1); // wrapped in math.floor to return lowest number

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)