const user = {
    username: "arjun",
    price: 999,

    welcomeMess: function(){
        console.log(`${this.username} ,You are now logged in !`); // this is used for current context => used to access variables in current scope
        console.log(this);
    }
}

// user.welcomeMess()
// user.username = "rohini"
// user.welcomeMess()

// console.log(this);

const addTwo = (num1, num2) => { // explicit return type
    return num1 + num2

}

console.log(addTwo(2,8));

const addNum = (nm1, nm2) => nm1 + nm2 // implicit return type

console.log(addNum(5,5));