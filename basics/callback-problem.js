const login = () => {
    return new Promise((resolve, reject) => {
        // logic 
        let success = false;
        let user = {
            name: "Sandesh Bhattarai"
        };
        if(success) {
            // cb
            resolve(user);
            // node 
        } else {
            reject("Error ")
        }
    });
}

const addNumb = (a,b) => {
    // return new Promise((res, rej) => {
    //     // res(a+b);
    //     rej(a+b)
    // })
    // return Promise.resolve(a+b);
    return Promise.reject(a+b);
}

addNumb()
// .then((result) => {

// })
.catch((err) => {

})

const dahsboard = () => {
    return new Promise((resolve, rej) => {
        resolve();
    });

}
// 3 stages 
// pending / call 
// fullfilled or reject
// settlement

// form design
// submit 
// 

let loading = true;
login()     // pending
.then((data) =>{
    console.log(data);  // user object
    return dahsboard()
    // loading = false;
})
.then((resDashboard) => {
    console.log("I am of Dashboard");
})     // resolve stage
.catch((error) =>{
    console.error(error)
    // loading = false;

})    // reject stage
.finally(() =>{
    // optional
    loading = false;
})  // settlement


function test() {
    return [];
}

test().push()