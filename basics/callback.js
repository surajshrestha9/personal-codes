const doSomething = (cb) => {
    console.log("I am inside doSomething");
    cb(() => {
        console.log("I am innermost function");
    });
    // cb()
    // clouser func
}

const doNothing = () => {
    console.log("I am inside doNothing");
}


// doSomething(doNothing)
doSomething((test) => {
    console.log("I am inside doNothing");
    test();
    // console.log(test);
})

// asynchronous => How it is handled
// callback => how it is used, drawback 
// .map, .filter, .foreach