// const testFunc = () => {
//     return "I am in export js file";
// }

// const newFunction = () => {
//     return "Let's program";
// }


// ES5
// export from this file 
// module.exports = {
//     testFunc: testFunc,
//     newFunction: newFunction
// };
// all export 
// module.exports = {
//     testFunc,
//     newFunction
// };
// module.exports = newFunction;


// ES6
// named export 
export const testFunc = () => {
    return "I am in export js file";
}

export const newFunction = () => {
    return "Let's program";
}

const funct = {
    testFunc,
    newFunction
}

// export default funct;

// all export
export default {
    testFunc,
    newFunction
};

// default Export 
// a file can have any numbers of named export but only one default export 