// reusability => Inheritance
class User {
    name;
    email;
    constructor() {
        console.log("I am in User");
    }
    getName = () => {
        console.log("I am in parent");
        return this.name;
    }
}

class Student extends User{
    section;
    roll_no;
    constructor() {
        super() // parent's constructor call
        console.log("I am in student");
    }

    // getName = () => {
    getName(){
        // 
        // task: findout how to call a parent's overridden method
        return super.getName();
        // return this.getNameValue();
        // return this.getName();
        // return this.getName(); // call parent's getName from this function
    }
}

// class Teacher extends User{
//     experience;
//     eduction;
// }

// priority => child 
let stdObj = new Student();
stdObj.getName();
// overriding 
