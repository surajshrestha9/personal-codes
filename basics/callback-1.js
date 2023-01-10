const login = (username, password, cb) => { // admin, admin123, (error, success)=> {}
    // logic: username, password match or not 
    if(username === "admin" && password == "admin123"){
        cb(false, {name: "Sandesh"})    // (false, {name: "Sandesh"}) => { error success: [Object]}
    } else {
        cb(true, null)    // failure // (true, null) => { error 1 success: null}
    }
}

const dashboard = (error, success) => {
    // execute 
    if(error) {
        console.log("error ", error)
    } else {
        console.log("success ", success.name)
    }
}

login("admin","admin123", dashboard)    // 1 call 