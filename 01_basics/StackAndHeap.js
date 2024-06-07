// Example of Stack(primitive)... where a copy is assigned and changes are only made to the copy

let nameOne = "Arjun"
let nameTwo = nameOne

nameTwo = "Manu"

console.log(nameOne);
console.log(nameTwo);

// Example of Heap(non-primitive) ... where u get the reference and not a copy , hence changes are directly made to the **ORIGINAL COPY**

let usernameOne = {
    riotId: "Thawne" ,
    tag: "8320"

}

let usernameTwo = usernameOne

usernameTwo.riotId = "Flick" 

console.log(usernameOne);
console.log(usernameTwo);

// objects can be accessed by . => followed by name (Example as shown above)
