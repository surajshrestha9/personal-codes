// WAP to take marks and Total score for a student 
// print the division and percent obtained
//  per => 80-100 => First with Distinction
// per => 60-80 => First Division
// per => 45-60 => Second Division
// per => 32-45 => Third Division
// per => < 32 => Sorry! You are failed.
// alert print 

let std_name = prompt("Enter Student Name: ");
let score = Number(prompt("Enter Obtained Marks"));

let per = score / 5 ;

if(per >= 80){
    alert(std_name+", passed in Distinction. Per: ", per);
} else if(per >= 60) {
    alert(std_name+", passed in First Division. Per: ", per)
} else if(per >= 45) {
    alert(std_name+", passed in Second Division. Per: ", per)
} else if(per >= 32) {
    alert(std_name+", passed in Third Division. Per: ", per)
} else {
    alert(std_name,", Sorry! You are failed. per: ", per);
}





let prod_name = prompt("Enter Product Name: ");
let price = Number(prompt("Enter Product Price: "));
let discount = Number(prompt("Enter Product Discount: "));


let single_product = {
    name: prod_name,
    price: price,
    discount: discount
}

console.log("Product Name: ", single_product.name)
console.log("Product Price: ", single_product.price)
console.log("Product Discount: ", single_product.discount)
console.log("")