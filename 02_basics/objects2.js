const InstaUser = new Object()
const TwitterUser = {}

console.log(InstaUser); // will print empty object
console.log(TwitterUser); // even this prints epmty object

InstaUser.id = "6969xd"
InstaUser.name = "Rashmit"
InstaUser.isLoggedIn = false

console.log(InstaUser);

const regUser = {
    email: "arjun@google.com",
    fullName: {
        UserFullName:{
             firstName: "Arjun",
             lastName: "Nair"
        }
    }
}

console.log(regUser.fullName);

console.log(regUser.fullName.UserFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

console.log(InstaUser);
console.log(Object.keys(InstaUser))
console.log(Object.values(InstaUser))
console.log(Object.entries(InstaUser)) //Returns an array of key/values of the enumerable properties of an object
console.log(InstaUser.hasOwnProperty('isLoggedIn'))
console.log(InstaUser.hasOwnProperty('isLoggedOut'))


const course = {
    coursename: "JS in hindi",
    price: "999",
    teacher: "Hitesh.C"


}
const {teacher} = course
const {coursename: name} = course // you can also assign a name while de-sturct a value

console.log(teacher);
console.log(name); // here it is actually printing coursename

