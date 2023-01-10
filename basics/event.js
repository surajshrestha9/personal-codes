let counter = 0;
const increaseCounter = (elem) => {
    console.log(elem);
    counter++;
    let name = prompt("<p>Enter your name: </p>"); // string
    document.getElementById('counter').innerHTML = counter;
}