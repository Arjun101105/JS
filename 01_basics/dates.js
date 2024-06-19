// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// let newDate = new Date(2024, 5, 11)

// let newDate = new Date(2024, 5, 11, 12, 5, 30)
let newDate = new Date("06-10-2024") // mmddyy format

console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(newDate.getTime());

let secDate = new Date()
console.log(secDate);
console.log(secDate.getDay()); // output shows 1 => which means MONDAY
console.log(secDate.getMonth());

// console.log(newDate.toLocaleString('default', {
//     weekday: "long"
// }))