// let i = 0;
// while(i < 10) {
//     i++;
// }

let word = "PROGRAMMING";

/**
 * P
 * P   R
 * P   R   O
 * P   R   O   G
 * P   R   O   G   R
 * P   R   O   G   R   A
 * P   R   O   G   R   A   M
 * P   R   O   G   R   A   M   M
 * P   R   O   G   R   A   M   M   I
 * P   R   O   G   R   A   M   M   I   N
 * P   R   O   G   R   A   M   M   I   N   G
 * 
 * 
 * 
 * 
 * 
 * 1
 * 1   2
 * 1   2   3
 * 1   2   3   4
 * 1   2   3   4   5
 * 1   2   3   4   5   6
 * 1   2   3   4   5   6   7
 * 1   2   3   4   5   6   7   8
 * 1   2   3   4   5   6   7   8   9
 * 1   2   3   4   5   6   7   8   9   10
 * 
 * 
 * 1   2   3   4   5   6   7   8   9   10
 * 1   2   3   4   5
 * 1
 * 
*/

// for(let i = 10; i >= 1; i--) {       
//     let to_print = "";
//     for(let j = 1; j <= i; j++){    
        
//         if(i === 1 || i % 5 === 0) {
//             to_print += j+"    ";
//         } else if(){

//          } else { }

//     }

//     if(i === 1 || i % 5 === 0) {
//         console.log(to_print);
//     }

// }


let question_list = [
    {
        question: "Who is the current PM of Nepal?",
        answers: [
            {
                value: "Sher Bahadur Deuba"
            },
            {
                value: "Balendra Shah"
            },
            {
                value: "Pushpa Kamal Dahal"
            },
            {
                value: "Khadga Prasad Oli"
            }
        ]
    },
    {
        question: "Who is the current President of Nepal?",
        answers: [
            {
                value: "Sher Bahadur Deuba"
            },
            {
                value: "Mrs. Bidhya Devi Bhandari"
            },
            {
                value: "Pushpa Kamal Dahal"
            },
            {
                value: "Khadga Prasad Oli"
            }
        ]
    }
]

// Q. Who is the current PM of Nepal?
// Option a. Sher Bahadur Deuba
// Option b. Balendra Shah
// Option c. Pushpa Kamal Dahal 
// Option d. Khadga Prasad Oli

// Q. Who is the current President of Nepal?
// Option a. Sher Bahadur Deuba
// Option b. Mrs. Bidhya Devi Bhandari
// Option c. Pushpa Kamal Dahal 
// Option d. Khadga Prasad Oli

let format_txt = "";
let options = "abcd";

for(let i = 0; i<question_list.length; i++) {

    format_txt += "Q. "+question_list[i].question+"\n";
    
    for(let j = 0; j < question_list[i].answers.length; j++) {
        format_txt += "Option "+options[j]+". "+question_list[i].answers[j].value+"\n";
    }
    format_txt += "\n\n";
}
console.log(format_txt);