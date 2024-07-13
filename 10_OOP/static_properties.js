class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const arjun = new User("Arjun")

console.log(arjun.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email
    }
}



const iPhone = new Teacher ("iPhone", "iPhone@apple.com") 
iPhone.logMe()

