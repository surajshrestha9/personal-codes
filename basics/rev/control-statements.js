/**
 * if-else
 * else-if
 * switch-case
 * Loop
 *      while 
 *      for
 *      for-in
 *      for-of
 *      Array.map
 *      Array.filter
 *      Array.reduce
 *      Array.foreach
 *      Array.each
 * 
 */

let product = {
    name: "iPhone 12",
    price: 128000,
    discount: 10
}

// show after discount =? 
if(product.discount < 0) {
    // code block
    let after_disount = product.price - product.price * product.discount/ 100;
    console.log(after_disount);
} else {
    // code block only if not success
    console.log(product.price);
}

let rectangle = {
    len: 10,
    wid: 10
}

// len or wid <= 0 => incorrect

if(rectangle.len <= 0 || rectangle.wid <= 0) {
    console.log("Incorrect input");
} 

// truthy
// falsy => null, false, 0, "", '', undefined
let x = null;
if(x) {
    // block 
} else {
    // falsy
}

// nesting of if
if(rectangle.len <= 0) {
    if(rectangle.wid <= 0) {
        console.log("Incorrect Input")
    }
}  

// WAP to calculate TAX based on the Annual income and brackets

let annual_income = 10000000;
/**
 * 0-500000 => 1%
 * 300000 => 15%
 * 200000 => 17%
 * 100000 => 23%
 * > => 32%
 */
let tax_amount = 0;
if(annual_income <= 500000){
    tax_amount = annual_income * 1/100;
} else if(annual_income <= 800000) {
    tax_amount = (500000 * 1/100) + (annual_income-500000) * 15/100;
} else if(annual_income <= 1100000) {
    tax_amount = (500000 * 1/100)+(300000 * 15/100) + (annual_income-800000) * 20/100;
} else if(annual_income <= 1400000) {
    tax_amount = (500000 * 1/100)+(300000 * 15/100)+(300000 * 20/100) + (annual_income-1100000) * 25/100;
}  else {
    tax_amount = 5000+45000+60000+75000+ (annual_income-1400000) * 36/100;
}

console.log("Total Tax Amount: ", tax_amount);





// ...
let act = "add";        // add, edit, view, delete

if(act === "add") {
    // add
} else {
    // 100 lines code
    if(act === 'edit') {
        // edit
    } else {
        // 100 lines of code
        if(act === 'view') {
            // view
        } else {
            // delete
            // code block 
        }
    }
}

if(act === 'add') {
    // add 
} else if(act === 'edit') {
    // edit
} else if(act === 'delete') {
    // delete
} else {
    // view
}


switch(act) {
    case "add":
    case "edit": 
        let day = "1";
        // edit block ;
        break;
    case "delete": 
        // delete block ;
        break;
    case "view": 
        // view block ;
        break;
    default: 
        // optional
        // alway on false
        break // optional
}