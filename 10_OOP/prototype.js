// let myName  = "Arjun   "
// console.log(myName.length);
// console.log(myName.trueLength);

let myHeros = ["thor" , "spiderman"]

let powers = {
    thor: "Hammer",
    spiderman: "Spider Web",
    

    getSpiderPower: function(){
        console.log(`Spidy's power is ${this.spiderman}`);
    }
}


// INHERITANCE

const teacher = {
    makeTutorials: true

}

const teacher_support = {
    isAvailable: false
}

const TA_support = {
    makeAssignments: "Class Assignments",
    fullTime: true
}
