// for loop

for (let i = 0; i <= 10 ; i++) {
    const element = i
    if(element == 5){
        // console.log("5 is five !");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {

    // console.log(`Outer Loop values: ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop values: ${j} and outer values: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myArr = ["flash", "batman", "arrow"]
for (let index = 0; index < myArr.length; index++) { // index is < array.length because indexing starts from zero ... hence 3rd element 
    const element = myArr[index];                   // becomes undefined 
    // console.log(element);
}

// keywords
// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 skipped !`);
        continue
    }
    
    console.log(`value of i is: ${index}`);
    
}