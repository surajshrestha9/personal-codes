const prom1 = () => {
    return new Promise((res, rej) => {
        let a = true;   // false
        if(a) {
            res("I am resolve of prom1")
        } else {
            rej("I am reject of prom1");
        }
    })
}

const prom2 = () => {
    return new Promise((res, rej) => {
        let b = true;   // false
        if(b) {
            res("I am resolve of prom2")
        } else {
            rej("I am reject of prom2");
        }
    })
}

const prom3 = () => {
    return new Promise((res, rej) => {
        let c = true;   // false
        if(c) {
            res("I am resolve of prom3")
        } else {
            rej("I am reject of prom3");
        }
    })
}

// prom1()
// .then((resolve1) => {
//     console.log("Resolve of 1: ", resolve1);
    
//     prom2()
//     .then((res2) => {
//         console.log("Resolve of 2: ", res2)
//         prom3()
//         .then((res3) => {
//             console.log("resolve of 3: ", res3)
//         }) 
//         .catch((err3) => {
//             console.log("Reject of 3: ", err3)
//         })
//     })
//     .catch((rej2) => {
//         console.log("Reject of 2: ", rej2)
//     })
// })
// .catch((rej1) => {
//     console.log("Reject of 1:", rej1)
// })


prom1()
.then((resolve1) => {
    console.log("Resolve of 1: ", resolve1);
    return prom2()
})
.then((resolve2) => {
    console.log("Resolve of 2: ", resolve2)

    return prom3()
})
.then((resolve3)=>{
    console.log("Resolve of 3: ", resolve3)
})
.catch((rej1) => {
    console.log("Reject:", rej1)
})

// promise => user input username password 
// check => admin. admin123
// another promise => print 

// const promResolve1 = () => {
//     return Promise.resolve("I am resolve of 1");
// }


// const promResolve2 = () => {
//     return Promise.resolve("I am resolve of 2");
// }


// prom1()
// .then()
// .catch()

// prom2()
// .then()
// .catch()

// prom3()
// .then()
// .catch()

// CSV file => 10000
// ==> read file read, every row promise because processing is required 
// ==> You have store in the db

// Promise.all([prom1(), prom2(), prom3()])
// Promise.allSettled([prom1(), prom2(), prom3()])
// .then((response) => {
//     console.log("Final Resp: ", response)
// })
// .catch((error) => {
//     console.log("Final Rej: ", error)
// })

// after all the promise being settled execute some codes
// only execute code block once all the promises are resolved


// promResolve()
// .then((data) => {
//     console.log(data);
// })
// // .catch()

// promReject()
// .catch((error) => {
//     console.log(error);
// })