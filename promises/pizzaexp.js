let pizza;

function orderPizza() {
  console.log("Ordered a pizza");

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("Order received");
      pizza = 'pizza';
      resolve(); // Resolve the promise when pizza is ready
    }, 1000);
  });
}

function eatPizza() {
  console.log(`Eat ${pizza}`);
}

orderPizza()
  .then(() => {
    eatPizza();
  })
  .catch((error) => {
    console.error("Error while ordering pizza:", error);
  });

console.log("Doing other stuff");
