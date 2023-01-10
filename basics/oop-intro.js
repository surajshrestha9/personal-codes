// function 
// student => 
// Role 
// let name = "Sandesh";   // string 
// // let name_1 = new String("Sandesh");
// let user = {
//     name: "Sandesh"
// }

// typeof user;    // object
// let a = [];
// typeof a;   // object

// user.name;
// user['name'];

// Prototype Based OOP
function User() {
    this.name = "sandesh";
    this.email = "sandesh.bhattarai@broadwayinfosys.com";
}

let user_obj = new User();  // prototype based object
user_obj.name;

User.prototype.getName = function() {
    return this.name;
}

user_obj.getName();

let another_user = user_obj;
user_obj.name = "test"

let names = [
    user_obj.name,
    another_user.name
]

// class based 

// let array_var = [];
// / let array_var: array = [];