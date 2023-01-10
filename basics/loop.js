// let i =1;           // 1

// while(i <= 10) {        // 1 <=10
//     // code block
//     console.log(i)      // 1 1
//     i += 1;

// }

// WAP to print even numbers between 1-100 by using while loop
// let i = 1;
// while(i <= 100){
//     if(i % 2 === 0) {
//         console.log(i);
//     }
//     // console.log(i);
//     i += 1;
// }

let courses = [
    {
        title: "AWS Solution Architect Training",
        duration: "70 Hours",
        image: "https://broadwayinfosys.com/uploads/courses/83651633019868.png"
    },
    {
        title: "AWS Cloud Practitioner Training",
        duration: "40 Hours",
        image: "https://broadwayinfosys.com/uploads/courses/47271633018202.png"
    },
    {
        title: "AWS Cloud Practitioner Training",
        duration: "40 Hours",
        image: "https://broadwayinfosys.com/uploads/courses/47271633018202.png"
    },
]

// 0
var i = 0;
var size = courses.length;  // 3    => 0, 1, 2

while(i < size) {
    /**
 * 
 * <div class="item course-list-col col-md-4 col-lg-3"> 
 * <div class="card course-card "> 
 * <img src="https://broadwayinfosys.com/uploads/courses/39241628173706.png" class="card-img-top img-responsive lazy" alt="Python &amp; Django Training in Nepal" title="Web Development With Python and Django" style="">
 *  <div class="card-body"> 
 * <strong class="card-title card__title_font_size"> 
 * <a href="https://broadwayinfosys.com/python-django-training-in-nepal">Python &amp; Django Training</a> 
 * </strong> 
 * <p class="card-text">
 * Duration: <strong>2.5 Months</strong>
 * </p> 
 * </div> 
 * <a href="https://broadwayinfosys.com/python-django-training-in-nepal" class="hovered"> 
 * <span class="btn btn-trans-primary">
 * Learn More <i class="icon-arrow-chevrolet"></i>
 * </span> 
 * </a> 
 * </div> 
 * </div>
 * 
 */
    // console.log(courses[i]);
    i++;
}
let products = [
    {
        name: "Product One",
        cp: 100,
        sp: 200
    },
    {
        name: "Product Two",
        cp: 200,
        sp: 100
    }
];

i = 0;
size = products.length;

while(i < size) {
    let html = "Name: "+ products[i].name+" Cp: Npr. "+ products[i].cp + " Sp: Npr. "+ products[i].sp;
    if(products[i].cp > products[i].sp) {
        // loss
        html += " Loss: Npr. "+(products[i].cp - products[i].sp)+" Percent: "+((products[i].cp - products[i].sp)/products[i].cp * 100)
       
    } else {
        html += " Profit: Npr. "+(products[i].sp - products[i].cp)+" Percent: "+((products[i].sp - products[i].cp)/products[i].cp * 100)
    }
    console.log(html);
    i++
}

// loop 
// profit loss 
// Output: 
// Name: Product One, Cp: Npr. 100, Sp: Npr. 200, Profit: Npr. 100, Percent: 100%
// Name: Product Two, Cp: Npr. 200, Sp: Npr. 100, loss: Npr. 100, Percent: 100%

// WAP to create an array or products 
// products should contain: name, cp, sp 
// using while loop calculat profit or loss 
// print the profit or loss and percent too 


/***
 * 0-20 => 80
 * 21-35 => 5
 * 35-50 => 7 
 * 50-100 => 8
 * > 100    => 10
 */

let units = 75;
// 20 => 80
// 15 => 15*5 => 75
// 15 => 15*7 => 105
// 25 => 25*8 => 200

// total amount 