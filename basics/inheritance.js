class User{
    constructor(){
        console.log("I am construcotr of User");
    }
    // getUser = () => {
    getUser(){
        return {
            name: "User name"
        }
    }
}

class Admin extends User{
    constructor(){
        super();
        console.log("I am constructor of Admin")    
    }
    // getUser = () => {
    getUser(){
        // call user=> getUser()
        let result = super.getUser();    // user-> getUser() call response
        console.log(result);
        return {
            name: "Admin User"
        }
    }
}

class Customer extends User{
    constructor(){
        super();
        console.log("I am constructor of Customer")
    }
}
// const user = new User();    // {name:null, username: null}
const admin = new Admin(); 
const customer = new Customer(); 

admin.getUser();
customer.getUser();

// WAP to collect user information from the user.
// name, email, address
// populate an array with custom User class object
// by using map function populate a html table with the user data. 
// When the page is refreshed, the table should be reset otherwise, 
// all the data should be in the same page