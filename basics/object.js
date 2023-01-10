// Class create

let product = {
    name: "Product Name 4",   // name
    price:  5000,       // price
    stock: 10,         // ?
    discount: 5,          // ?
    brand: "brand 2",
    cateogry: "category 2"
}

// JavaScript Object notation, 
// universal data format
let product_1 = {
    "name": "Product Name 4",   // name
    "price":  5000,       // price
    "stock": 10,         // ?
    "discount": 5,          // ?
    "brand": "brand 2",
    "cateogry": "category 2"
}

// console.log(product['name'])
// console.log(product?.asdfaf);

let all_products = {
    product: product
}

let first = all_products.product;

// delete all_products.product;


let keys = Object.keys(first);  // array 
let values = Object.values(first);

console.log(keys);
console.log(values);