// ways to declare an object 

// singleton => object.create

// object literals  

const mySym = Symbol("key1")

const user = {
    name: "Arjun",
    "fullName": "Arjun Nair",
    [mySym]: "myKey1",
    age: 18,
    location: "Vasai",
    email: "arjun@google.com",
    isLoggedIn: false,

}

console.log(user.name);
console.log(user["name"]);

console.log(user["fullName"]); // here you cant access fullName with user.full name .... 
console.log(user[mySym]);

user.email = "arjun@microsoft.com"

// Object.freeze(user) // doesnt allow further changes when you freeze

// user.email = "arjun@chatGPT.com"

// console.log(user);

user.greeting = function(){
    console.log("Hello User");
}


user.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`); // when you have to use the same object as a referrence .. we use "THIS."
}

console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingTwo());