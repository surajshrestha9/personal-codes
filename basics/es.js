// ECMA Script 

// ES5 standards 
// import and export 
// package => variable, constant, function, class, whole application

// import testFunc from export file 
// const testFunc = require("./export");

// whole function import
// const funct = require("./export");

// object destruct
// const {testFunc, newFunction } =  require("./export");

// ES6 imports
// node mode


// common => js 
// module => es 

// named export => import 
import {testFunc as testFromExport, newFunction} from "./export";
// import {testFunc} from "./xyz";

// default export => import 
import * as funct from "./export";

// funct.testFunc();

console.log(testFromExport());
console.log(newFunction());


// Class Bases oop
    // ES6 

// default value in a function 
const testFunction = (a =null) => {

}

// Arrow notation 
// const testFunctIon = () => {
//     return "Test function";
// }

// const testFunctIon = () => "Test function";
const testFunctIon = a => "Test function";

// Object Destructuring 
let user = {
    name: "Sandesh Bhattarai",
    email: "sandesh.bhattarati@broadwayinfosys.com",
    address: "kathmandu",
    phone: "123123123123",
    post: "tutor"
}

// let {name, email, post} = user;

// let name = user.name;
// let email = user.email;
// let post = user.post;

let roles = ['admin','customer'];
let roles_1 = [...roles, 'seller'];

// spread or rest 
let admin = {
    ...user,
    name: "Test User",
    role: "Teacher"
}

user.name = "Tst New User";

let {name, email, post, ...other} = admin;
console.log(name);



let x = {test: "tst"};

let y = Object.assign({}, x);

let z = JSON.parse(JSON.stringify(x));


let user_1 = {...user};

user.name = "test new user Value";
user_1.name;

// Template literals
let a = "Tst";

console.log("I am here. I need to "+a+" this value");
console.log(`I am here. I need to ${a} this value`);

// GIT 

/**
 * index
 * day 1 
 * A    =>  
 * B    => 
 * C    => 
 * 
 * Me => A + B + C
 * 
 * Github
 * Gitlab 
 * Bitbucket
 * 
 * 
 * 
 * 
 * Common place (Repository/Repo) 
 * Repo => setting => CI/CD
 *               -------> master -----------> Deploy that to server (Online)
 *  A, B, C 
 *  A ============> 3 days ( pushed to repo)
 *  B                ==============> 5th day   
 *                      (Pull the code from Repo, merging the code with A)
 *                      after merging and resolving the conflict and testing 
 *                      B pushed the code to repo
 * 
 * Day 1 
 *      nodes/commits ....... n numbers of commits 
 *      Day 3 (A)
 *          nodes/commits ........
 *              Day 5 (B)
 *              Day 5 (A+B)
 * 
 *          
 * 
 * GIT 
 * 
 * FTP/SFTP => Deploy
 */