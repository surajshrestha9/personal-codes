// sync and async 
const func1 = () => {
    setTimeout(()=>{
        console.log("I am in function 1");
    }, 3000)
}

const func2 = (cb) => {
    setTimeout(()=>{
        console.log("I am in function 2");
        cb();
    }, 2000)
}
const func3 = () => {
    setTimeout(()=>{
        console.log("I am in function 3");
    }, 1000)
}
// 5 sec
// 3sec
// 3sec
// 1
// setTimeout(func1, 3000)
// setTimeout(func2, 2000)
// setTimeout(func3, 1000)

func1()
func2(func3)
//func3()

// callback 
// promise handling 
// async-await 