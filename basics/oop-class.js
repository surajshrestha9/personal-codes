class User {
    // class body
    name;
    email;

    constructor(_name, _email) {
        this.name= _name;
        this.email = _email;
    }

    getName() {
        return this.name;
    }

    getEmail = function() {
        return this.email;
    }

    // setName = (_name) => {
    //     this.name = _name;
    // }
}

let obj = new User("sandesh",'test@test.com');
// obj.name = "Test";
obj.getName();

// Create a class called Student, 
// to take name, score as an object value
// create a function in the class to calculate the percentage
// another function to calculate the division and assign to the class variable 
// both the calculation should be made when the class's object is
// created 
