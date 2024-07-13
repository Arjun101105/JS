function SetUsername (username){
        // complex DB call
        this.username = username
        console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("CHAI" , "chai@chaicode.com", "696969")
console.log(chai);
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"