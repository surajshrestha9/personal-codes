console.log("Hello World!!!");  // error, log, info, warning
// variable => storage run time 

var full_name = "";

var full_name = "Sandesh Bhattarai";    //

let email = "";

//let email = "";


// var a = 10;
// console.log(a);
// {
//     // block scope 
//     var a = 20; // redeclare
//     console.log(a);
// }
// console.log(a); // 20



let a = 10;
console.log(a);
{
    // block scope 
    let a = 20; // redeclare
    console.log(a);
}
console.log(a); // 10


// constants => values remains fixed 

const GRAVITY = 9.8;
const PI = 3.14;

const user = {
    age: null
};


user.age = 12;

// string(text), number, bool, null -> Assigned to constants, cannot be changed 

// array, json, object => The values of a constant can be changed 
const users = [];


// Data Type 
/**
 * String 
 *  "", '', ``
 * number 
 *  1,2,3, 1.1, -1
 * boolean 
 *  true, false 
 * Null 
 *  null
 * undefined 
 *  undefined
 * 
 * Array 
 *  // index => value
 *  0,      1,  ...... , n-1
 * [value, values, ...., valueN]
 * 
 * Object
 * JSON
 */
let x;  // undefined
x = 10  //


// one person
// let name = "";
// let email_addr ="";
// let phone = "";
// let age = '';

let person = [
    ["User", "name"],            // 0
    "user@test.com",        // 1
    9876543210,             // 2
    15                      // 3
];
console.log(person[0][0]);
console.log(person[0][1]);
// let person_1 = new Array();

let all_std = [];       // null, 0

let first_std = [
    "Student Name",
    "Class",
    "roll_no",
    "Address"
]

all_std[0] = first_std;     // 0

all_std.push(first_std);    // 1

// top index
// all_std[0] = first_std;
all_std.unshift(first_std); // 0 => 0->1, 1->2


// top elemn 0 index, 0,1,2
let firs_elem = all_std.shift() // array 
// 1->0, 2->1

// last index elem 
let last = all_std.pop();   // array 


let indexed_val = all_std.splice(1,1)

let size = all_std.length;  // no of elements in an array


// objects
// object
let product = {
    "name": "iPhone 13",
    "price": 138000,
    "stock": 3,         
    "discount": 15,          
    "brand": "apple"
};


let discount = product['price'] - product['price'] * product['discount'] /100;
// or 
let discount_2 = product.price - product.price * product.discount /100;

let keys = Object.keys(product)
let values = Object.values(product);