/**
 * a. Arithematic Operator 
 *      +, -, *, / ,%
 * b. Increment or Decrement 
 *      ++, -- 
 * c. Assignment Operator 
 *      =,  +=, -=, *=, /=, %=
 * d. Comparision Operator 
 *      <, >, <=, >=, ==, !=, <>, !==, ===
 * e. String /Concatination 
 *      +, ,
 * f. Logical Operator 
 *      &&, || , !
 * g. Conditional Or Ternary 
 *      (exp) ? true : false;
 * h. Spread and Rest 
 *      ...
 */
let a = 10; // 10

a = a + 1;  // 11
a += 1;

// a = 11
// post assign 
console.log(a++);   // 11, 
// a = 12

// pre assign 
console.log(++a);   // a= 13, 13

let i = 100;
let j = '100';

console.log(i == j);    // true
console.log(i === j);   // false 

console.log(i==j && !(i===j));   // true && !false => true

let age = 35;

let age_group = ((age <= 16) ? "Child" : ((age >= 20) ? "adult" : "test"));

let test = age ?? null;

let first = {
    name: "Sandesh Bhattarai",
    position: "Web Dev"
}

let dev_1 = {
    ...first,
    role: "Senior Dev",
    address: "Kathmandu"
}

// let name = dev_1.name;
// let role = dev_1.role;

let {name, role, ...rest} = dev_1;