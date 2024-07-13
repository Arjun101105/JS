class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const arjun = new User("arjun@microsoft.com", "69xd")
const nair  = new User("arjun@google.com", "arjunishere")
console.log(arjun.password);
console.log(nair.password);