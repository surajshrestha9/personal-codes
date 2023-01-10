// function addNumbers(a, b =0) {
function addNumbers() {
    let c = a + b;
    return c;
}

var a = 10;
var b = 20;

let result = addNumbers(); 

// console.log(result);    // 30 NaN

const addNumber1 = function (a, b) {

}

result = addNumber1(20,30);

const functions_list = {
    getName: function () {
        return "I am here";
    }
}

result = functions_list.getName();


// arrow notaion 
const addArray = (a) => {
    // code block
    let sum = 0;
    for(let b of a) {
        sum += b;
    }
    return sum;
}

result = addArray([1,2,3,4,5,6,7,8,9,10]);

console.log(result);