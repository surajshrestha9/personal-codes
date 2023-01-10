/**
 * if-else 
 * else-if
 * switch-case 
 * loop
 */

let x = 10;
let a = null;

if(x >= 10) {
    // true condition
    let a = 20;
}
// else {
    
    // false condition
    // a undefined
    // optional 
// }

if(x>=10) {
    a = 20
} 

// a might be defined 

// truthy value: 
// falsy Value: false, null, 0, "", '', ``, empty variable, undefined variable

let y ;
if(y){
    // false
} else {
    // run
}
// if(y) {

// } else {

// }

let product = {
    name: "iPhone 12",
    price: 120000,
    discount: 10
}

// 
let after_dis = product.price - product.price * product.discount / 100;
// if(product.discount > 0){
//     after_dis = product.price - product.price * product.discount / 100;
// }
console.log(after_dis);