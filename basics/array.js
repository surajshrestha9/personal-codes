// 5 variable for 1 product
// let product_name = "iPhone 12";
// let price = 123000;
// let stock = 10;
// let discount = 10;
// let brand = "apple";

// single Dimensional Array 
let product_1 = [
    "iPhone 12",        // 0
    123000,             // 1
    10,                 // 2
    10,                 // 3
    "apple"             // 4
];

// multi dimensional array
let products = [
    [
        "iPhone 12",        // 0
        123000,             // 1
        10,                 // 2
        10,                 // 3
        "apple" ,            // 4,
        ["Seller1", "seller 2"] // 5
    ],
    [
        "iPhone 13",        // 0
        138000,             // 1
        7,                 // 2
        0,                 // 3
        "apple"             // 4
    ]
]
console.log(products[0][5][0]);
//manipute 
