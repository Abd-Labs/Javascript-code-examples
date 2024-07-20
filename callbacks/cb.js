// let pizza;

// function orderPizza(){
//     console.log("Ordered a pizza")

//     pizza= 'pizza'

//     console.log("Order received")
// }

// orderPizza()
// console.log(`Eat ${pizza}`)

//----------------------------------
let pizza;

function orderPizza(callback){
    console.log("Ordered a pizza")
    
    setTimeout(function() {
      console.log("Order received")
       pizza= 'pizza'
       callback()
    }, 1000);
}

function Eat(){
    console.log(`Eat ${pizza}`)
}

orderPizza()
console.log("Doing other stuff")
