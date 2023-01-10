let i = 2;      // i = 2
// while 
// for 



// while 
while(i <= 10) {        // 6 <= 10
    // code block 
    // console.log(i)  // 2 4 6
    i = i + 2;       // 6
}

//1-100

let a = 1;          // 1

while(a <= 100) {       // 5<= 100
    let i = 2;              // i = 2
    let count = 0;          // count = 0
    
    while(i <= a/2) {       // 3 <= 4/2 //
        if(a%i === 0){      // 0 === 0
            count++;        // 1
        }
        i++;                // 3
    }
    if(count == 0 ) {      // 1 == 0 
        // console.log(a);             // 1    2  3
    }
    a++;            // 5
}

// print prime numbers between 1-100
// prime numbers => numbers which is divisible by 1 or itself


let products = [
    {
        name: "Product 1",
        price: 100,
        discount: 50
    },
    {
        name: "Product 2",
        price: 1000,
        discount: 25
    },
    {
        name: "Product 3",
        price: 10000,
        discount: 25
    },
];


let y = 0;
while( y < products.length) {
    
    console.log("Product Name: ", products[y].name)
    console.log("Product Price: ", products[y].price)
    console.log("Product Discount: ", products[y].discount)
    let discount = products[y].price - products[y].price * products[y].discount / 100;
    console.log("Actual Price: ", discount)
    console.log("")
    y++
}