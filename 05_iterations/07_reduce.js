const myNum = [1,2,3,4]

let myTotal = myNum.reduce((acc, currVal)=>{
    console.log(`acc is ${acc} and Current Val is: ${currVal}`);
    return acc + currVal
},
 0) // 0 is acc value

console.log(myTotal);

const shopping_cart = [
    {
        item: "Curd",
        price: 99
    },
    {
        item: "Whey Protien",
        price: 1600
    },
    {
        item: "creatine",
        price: 899
    },
    {
        item: "Russian",
        price: 6000
    }
]

const cart_total = shopping_cart.reduce((acc, item)=>acc + item.price, 0)

console.log(cart_total);