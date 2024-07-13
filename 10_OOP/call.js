function SetUsername (username){
        // complex DB call
        this.username = username
}

function createUser(username, email, password){
    SetUsername(username)
    this.email = email
    this.password = password
}

const chai = new createUser("CHAI" , "chai@chaicode.com", 696969)
console.log(chai);