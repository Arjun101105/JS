
// function def.

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("U");
    console.log("N");
}

sayMyName()
// ***************
function addTwoNum(num1, num2){
    console.log(num1 + num2);
}
const result = addTwoNum(7, 3)
console.log("Result is: ", result);
// ****************
function addNum(n1, n2){
    let ans = n1 + n2
    return ans
}
const ans = addNum(8,2)
// console.log(ans);
console.log("Result is: ", ans);

// ********

// function userLoggedIn(username){
//     return `${username} is logged in !`

// }

// console.log(userLoggedIn("arjun_nair"))
// console.log(userLoggedIn(""))
// console.log(userLoggedIn())

// ******** checking with if else

// function checkUser(id){
//     if(id === undefined){
//         console.log("Please enter a USERNAME");
//         return
//     }
//     return `${id} is logged in !`

// }

// console.log(checkUser());
// console.log(checkUser("arjun"));

// **** alternative ***
function checkUser(id){
    if(!id){
        console.log("Please enter a USERNAME");
        return
    }
    return `${id} is logged in !`

}

console.log(checkUser());
console.log(checkUser("arjun"));

// to create a default value so that there's always a username 
function checkId(UN = "rohini"){
    if(UN === undefined){
        console.log("Please enter a USERNAME");
        return
    }
    return `${UN} is logged in !`

}

console.log(checkId()); // here no username is entered so it accepts default case i.e, Rohini
console.log(checkId("arjun")); // here value "Arjun" overwrites rohini to print "arjun is logged in"

function calcPrice(val1, val2, ...num1){
    return num1
}

console.log("cart value is: ", calcPrice(200, 400, 500, 300)); // here 200 is val1 , 400 is val2

const user = {
    username: "arjun",
    price: 199
}

function objUser(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
objUser(user)

objUser({ username: "Rohini", price: 399})

const newArr = [100, 200, 500, 900]

function returnSecVal(secVal){
    return secVal[1]
}

console.log(returnSecVal(newArr));
console.log(returnSecVal([100, 300, 400, 800]));