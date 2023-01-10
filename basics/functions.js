function addNumbers(a, b = 0) {
    // body 
    let c = a + b;
    return c;
    // does not execute
}

const showResult = (a) => {
    console.log(a);
}
// let result = addNumbers(10,20);

// console.log(addNumbers(10,20))

showResult(addNumbers(10));     // 

// Write a function to add all the numbers inside a single dimensioinal array
let sum = 0;
const addArray = () => {
    // let sum = 0;
    // [1,2,3]
    numb_arr.map((val)=>{
        sum += val;
    })
    // return sum;
}


let numb_arr = [1,2,3];

addArray()
console.log(sum);   // 