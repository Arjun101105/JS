// immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB connected`);
})(); // here you wrap the function in a parenthesis and then the sencond parenthesis is used to execute the function

// always terminate IIFE with a ";" 
// IIFE also works with arrow functions
((name)=>{console.log(`${name}, DB connected once again!`);
})("Arjun");