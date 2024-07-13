class User {
    constructor(usernmame){
        this.usernmame = usernmame
    }

    logMe(){
        console.log(`Username is: ${this.usernmame}`);
    }
}

class Teacher extends User{
    constructor(usernmame, email, password){
        super(usernmame)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by: ${this.usernmame}`);
    }
}

const student = new User("Chai")
const teacher = new Teacher("Coffee and Americano" , "chai@facebook.com", "abc123")
console.log(student.logMe());
console.log(teacher.addCourse());

console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);