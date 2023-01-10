// promise actually is a class 
// used to create asynchronous calls

const login = (user,pass) => {
    return new Promise((resolve, reject) => {
        //
        if(user === "admin" && pass === 'admin123') {
            // cb(false, {name: "Sandesh"});
            resolve({name: "Sandesh"})
            // code no any effect
        } else {
            reject("Error: User error")
            // code no any effect
        }
    })
}


login("admin","admin123")
.then((resolve_data) => {
    // fullfilled
    let a = 10
    console.log(resolve_data)
})
.catch((error_data) => {
    // reject
    let b = 20;
    console.log(error_data)

})
.finally(() => {
    // optional 
    // code 1
    // console.log(a, b);
})

console.log("I am after login")


// stage => 3 stages 
// pending 
// fullfilled/rejectPromise C on
// settled

// Using a promise, ask a user to pass the username and password,
// check whether the data provided is matched with your static store
// username => admin
// password => admin123