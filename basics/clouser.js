const showSkeleton = () => {
    console.log("I am skeleton function");
    // 100codes 
    const doSomething = () => {
        console.log("I am inside doSomething");
        // clouser
        const doNothing = () => {
            console.log("I am inside doNothing");
        }
        //doNothing();
        return doNothing;
    }
    return doSomething;
    // doSomething();
}

let doSomething = showSkeleton();
let doNothing = doSomething();
doNothing();





// dependency
    // Sync 
    // async 

// top-bottom order
console.log("I am first statement");    // executes 1st , 5sec
console.log("I am Second statement");   // executes 2nd, 3sec
// final 8sec


// Table Content 
// content => fetched from API 
// API call (30sec) => Data => Manipulate (5sec) => Table (10sec)
// table develop => 45sec => 35s
// 45sec => 2

// Table Skeleton(2sec)       // api call pass (30sec)
// loading                      // 
// structure                    // data row ====> 