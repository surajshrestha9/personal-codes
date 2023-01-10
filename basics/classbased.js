class User{
    // class body
    // data methods
    name;
    email;
    address;
    phone;
    role;

    constructor(_name, _email, _role){
        this.name = _name;
        this.email = _email;
        this.role = _role;
    }

    getName = () => {
        return this.name;
    }
}

let user_obj = new User("Sandesh Bhattarai", "sandesh.bhattarai@broadwayinfosys.com","admin");
// user_obj.name = "Sandesh Bhattarai"
// user_obj.email = "sandesh.bhattarai@broadwayinfosys.com"
// console.log(typeof user_obj);   //
// name;
console.log(user_obj.getName())