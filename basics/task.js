// let score; 
// let std_name;
let std_1 = {
    name: "",
    score: '',
    division: "",
    per: ""
};

const calculateScore = () => {
    let per = std_1.score / 5 ;
    std_1.per = per
    if(per >= 80){
        std_1.division = "Distinction";
    } else if(per >= 60) {
        std_1.division = "First Division";
    } else if(per >= 45) {
        std_1.division = "Second Division";
    } else if(per >= 32) {
        std_1.division = "Third Division";
    } else {
        std_1.division = "Sorry! You are failed";
    }
    // TODO: Create an array outside all the function 
    // push std_1 object into the recently created array
    // html print
    populateTable()
}

const populateTable = () => {
    let html_to_print = "";

    // TODO:: Create a loop to access the array variable 
    // populate the html_to_print within loop

    html_to_print += "<tr>"
    html_to_print += "<td>1</td>"
    html_to_print += "<td>"+(std_1.name)+"</td>"
    html_to_print += "<td>"+(std_1.score)+"</td>"
    html_to_print += "<td>"+(std_1.per)+"%</td>"
    html_to_print += "<td>"+(std_1.division)+"</td>"
    html_to_print += "</tr>"

    // TODO: After Completion of the loop print the html

    document.getElementById("content").innerHTML = html_to_print;
}

const takeInput = () => {
    let name = prompt("Enter Student Name: ");
    let score = Number(prompt("Enter obtained Marks:"));

    std_1.name = name;
    std_1.score = score;

    calculateScore();
}