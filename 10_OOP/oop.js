// object literal

const user = {
    username: "Arjun",
    logged_in: true,
    

    getUserDetails: function(){
        console.log(`USERNAME: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

// constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Arjun", 20, true)
const userTwo = new User("Rohini", 18, false)

console.log(userOne);
console.log(userTwo);
