let products = [];      // null array

let prod_1 = [      // 0
    "Product Name",
    1234,
    10,         // stock
    10,         // discount
    "brand 1",
    "category"
];
// uses 

// Array data insert  at 0 index
products.push(prod_1);  // at the end of the array elements will be pushed/store

let prod_2 = [      // 1
    "Product Name 1",
    10000,
    20,
    "brand 2",
    "category 2"
]

products.push(prod_2); // 1

let prod_3 = [
    "Product Name 2",
    3000,
    25,
    "brand 2",
    "category 1"
];
// 2
products[2] = prod_3;

let prod_4 = [      // 3
    "Product Name 3",
    2500,
    2,
    "brand 3",
    "category 1"
];

let size = products.length; // size of an array , 3

products[size] = prod_4;

let prod_5 = [      // 3
    "Product Name 4",
    5000,
    5,
    "brand 2",
    "category 2"
];


products.unshift(prod_5);   // 0

// data retrive 
let top =  products.shift();    // top elem

let last = products.pop();  // last size-1

let index_elem = products.splice(1, 1);

let elem_return = products.slice(0,1);

// console.log(elem_return);
// console.log(products);


let allowed = ["jpeg", "jpg", 'png', 'bmp','svg','webp', 'gif'];
let ext = "mp3";


// loop 
// array.map()
// array.filter()
// array.foreach()
// array.each()
// array.reduce()

console.log(allowed.includes(ext));