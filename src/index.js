/*
  Luke Barker - CIS277 - HW Week 3
  I included the cart stuff we did at the end of class in case you wanted to see it.  Otherwise, the if portion starts on line 22.
 */
/*
const item = [
  { name: "Bananas", type: "Food", price: 2.99 },
  { name: "Hammer", type: "Tool", price: 9.75 },
  { name: "Game Console", type: "Electronic", price: 149.99 },
];

const customer = [
  {
    name: "Bob Jones",
    address: "12 Street Road",
    cart: [
      { name: "Bananas", type: "Food", price: 2.99, quantity: 2 },
      { name: "Hammer", type: "Tool", price: 9.75, quantity: 1 },
    ],
  },
];

const products = [
  { category: "Sporting Goods", price: 49.99, stocked: true, name: "Football" },
  { category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball" },
  {
    category: "Sporting Goods",
    price: 29.99,
    stocked: false,
    name: "Basketball",
  },
  { category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7" },
  { category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { category: "Fruits", price: 1, stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: 2, stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: 2, stocked: true, name: "Spinach" },
  { category: "Vegetables", price: 4, stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: 1, stocked: true, name: "Peas" },
];

// TODO: Write a "for" loop to calculate the total price of all products

// 1. Start at index 0 of products.
// 2. Exit the loop when the index is greater than the length of the array.
// 3. Increment the index by 1.

// Imperative code.  We are telling the computer what to do.

let total = 0;

for (let i = 0; i < products.length; i++) {
  total += products[i].price;
}

if (total > 100) {
  const discountedTotal = total - 0.1 * total;
  console.log(
    "Congratulations!  You qualify for a 10% discount.  Your total is $" +
      discountedTotal.toFixed(2) +
      "."
  );
} else {
  console.log("Your total is $" + total + ".");
}

const productCountByCat = {};

 for (let i = 0; i < products.length; i++) {
  if(products[i].category === "Sporting Goods"){
     (productCountByCat.SportingGoods += 1)
  } else {
    (productCountByCat.Electronics += 1);
   }

  }

 for (let i = 0; i < products.length; i++) {
  switch (products[i].category) {
    case "Sporting Goods":
      productCountByCat.SportingGoods += 1;
      break;
    case "Electronics":
     productCountByCat.Electronics += 1;
      break;
    case "Fruits":
      productCountByCat.Fruits += 1;
     break;
    case "Vegetables":
      productCountByCat.Vegetables += 1;
     break;
    default:
      console.error("Some other category");
  }
 }


for (let i = 0; i < products.length; i++) {
  if (productCountByCat[products[i].category]) {
    productCountByCat[products[i].category] += 1;
    console.log(productCountByCat);
  } else {
    productCountByCat[products[i].category] = 1;
    console.log(productCountByCat);
  }
}
console.log(productCountByCat);

*/

export function add2Nums(num1, num2) {
  return num1 + num2;
}

add2Nums(1, 4);
