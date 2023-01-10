setTimeout(() => {
    // only executes after the first second
    // console.log("I am first")
}, 1000)

// console.log("I am Second")

let users = [
    {       // 0
    name: "Sandesh",
    email: "sandesh.bhattarai@broadwayinfosys.com",
    address: "kathmandu",
    username: "admin",
    password: "admin123",
    role: "admin",
    status: "active"
}, {    // 1
    name: "Test",
    email: "test@test.com",
    addresss: "Lalitpur",
    username: "test",
    role: "student",
    password: "test123",
    status: "inactive"
},
{       // 2
    name: "Test 1",
    email: "test1@test.com",
    addresss: "Bhaktapur",
    username: "test1",
    role: "student",
    password: "test1234",
    status: "active"
}]
let students = users.filter((data, index) => data.role === 'student');
let admin = users.filter((data, index) => data.role === 'admin');
// users.forEach((data, index) => {

// })
// users.map((data, index) =>  {
//     if(data.role === 'student') {
//         // return data;
//         students.push(data)
//     }
//     // undefined 
// })
// let admin = [];


// for(let user of users) {
//     if(user.role === 'student') {
//         students.push(user);
//     } else {
//         admin.push(user);
//     }
// }