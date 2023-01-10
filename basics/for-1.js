// for(let i=1; i <=10; i++){
//         // execcute
// }

let products = [
    {
        id: 1,
        name: "Product 1",
        price: 1000,
        discount: 10,
        qty: 2
        // after_discount: 0
    },
    {
        id: 2,
        name: "Product 2",
        price:2000,
        discount: 5,
        qty: 3
        // after_discount: 0
    },
]

let prod_1 = {
    id: 1, 
    qty: 3
}

let index = null;
let total = 0;

for(let j in products) {
    //total +=  products[j].qty;

    if(products[j].id === prod_1.id) {
        // index = j;
        //total +=  products[j].qty;
    }
}

for(let item of products) {
    total += item.qty;
}

for(let i = 0, item; i < products.length; i++) {
    item = products[i]
    total += item.qty;
}
// for(let j = 0; j <= products.length; j++) {
//     if(products[j].id === prod_1.id){
//         index = j;
//         //products[i].qty +=  prod_1.qty;
//     }
// }
// index => 0, 1
// products[index];








console.log(products);
for(let i = 0; i < products.length; i++) {         // i = 0, 1 < 2, 1
    let dis = products[i].price - products[i].price * products[i].discount/100; // dis = 2000-2000*5/100
    products[i].after_discount = dis;           // 0, 1
}
console.log("");
console.log(products);