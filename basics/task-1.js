const takeInput = () => {
    return new Promise((res, rej) => {
        const uname = prompt("Enter username: ");
        const password = prompt("Enter your password");  
        if(!uname || !password)  {
            rej("Username or password is required. Please reload once.")
        } else {
            res({uname, password})
        }
    })
}

const validateUser = (uname, password) => {
    return new Promise((res, rej) => {
        // console.log("uname: ", uname, " Password: ", password);
        if(uname === 'admin' && password === 'admin123') {
            res("Username and password matched!")
        } else {
            rej("Username and password does not match")
        }
    })
}

takeInput()
.then((credential) => {
    // debugger;
    return validateUser(credential.uname, credential.password)
})
.then((resvalidate) => {
    alert(resvalidate)
})
.catch((err) => {
    alert(err);
})