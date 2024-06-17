const programming = ["js", "cp", "cpp", "py"] 

// programming.forEach( function (i){ // call back function ... hence no name to be assigned
//     console.log(i);
// } )

// programming.forEach((val)=>{
//     console.log(val);
// })

// function printVal(item){
//     console.log(item);
// }

// programming.forEach(printVal)


programming.forEach( (index, item, arr)=>{
    console.log(index, item, arr);
} )

const coding = [
    {
        langName: "JS",
        file: ".js"

    },
    {
        langName: "c++",
        file: ".cpp"

    },
    {
        langName: "html",
        file: ".html"

    }
]
coding.forEach((item)=>{
    console.log(item.langName);
})