// truthy & falsy

// here a string is considered to be TRUE ... hence condition is executed

// const userEmail = "arjun@tcs.com"
// if(userEmail){
//     console.log("Valid Email");
// }
// else{
//     console.log("Invalid Email");
// }

// here an empty string is considered to be FLASE ... hence the condition will not be executed

// const userEmail = ""
// if(userEmail){
//     console.log("Valid Email");
// }
// else{
//     console.log("Invalid Email");
// }

// here an empty array is considered to be TRUE and the condition is executed

const userEmail = []
if (userEmail) {
    console.log("Valid Email");
}
else {
    console.log("Invalid Email");
}

/* falsy values :-
    false, 0, -0, BigInt 0n, "", null, undefined, Nan */

/* truthy values :-
    "0", 'false', " ", [], {}, function(){} */

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (emptyObj) {
    console.log("Valid Email");
}
else {
    console.log("Invalid Email");
}

if(Object.keys(emptyObj).length === 0){     // object.keys(emptyObj) will return an array => if length is 0: then empty obj
    console.log("invalid email => object is empty");
}

// nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 10
val1 = 10 ?? 20
console.log(val1);

// terniary operator

const price = 100
price <= 80 ? console.log("less than 80"): console.log("more than 80");