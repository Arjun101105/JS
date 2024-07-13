class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    editUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai  = new User("Chai", "CHAI@google.com", "123")
console.log(chai.encryptPassword());
console.log(chai.editUsername());