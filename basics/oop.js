// Classes And Object 
// Prototype based or Class based
function User(_name) {
    this.name = _name;
    this.email = null;
    this.address = null;
}

User.prototype.getName = function() {
    return this.name;
} 

const user_obj = new User("Test user");    // new => object
const user_obj1 = new User("Test User 1");

// user_obj.name = "Test User";
// user_obj1.name = "Test User 1";

console.log(user_obj.getName());
// user_obj. 
// user_obj1.