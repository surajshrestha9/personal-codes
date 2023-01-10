/**
 * Arithematic Operators
 *      +, -, *, /, %
 * Increment or decrement 
 *      ++, --
 * Assignment Operators
 *      =, +=, -=, *=, /=, %=
 * String /Concatination 
 *  +, ,
 * Comparision Operator 
 *  <, >, <=, >=, ==, !=, ===, !==
 * Logical Operator 
 *   &&, ||, !
 * Ternary or Conditional 
 *  (exp) ? true : false 
 * spread Operator
 *      ...
 * Object Destructur
 *  {}
 */


let x = 10; // 10

x = x + 1;  // 11

x += 1;     // 12   // number

let y = "12";   // string 

(x == y);   // true
(x != y);   // false
(x === y);   // false
(x !== y);   // true

(x == y) && (x=== y);   // true && false => false
(x == y) || (x=== y);   // true || false => true
!((x == y) || (x=== y));   // !(true || false) => !true => false


console.log("The value of x: "+x)
console.log("The value of x: ",x)

let age = 12;

let user_age = (age && age > 0) ? age : null;

let age_2 = age ?? null

let user = {
    name: "Sandesh Bhattarai",
    address: "Kathmandu"
}

let admin = {
    ...user,
    name: "Test User",
    role: "admin",
    email: "test@test.com"
}

// let name = admin.name;
// let email = admin.email;
// let role = admin.role;

let {name, email, ...userLeft} =admin;
