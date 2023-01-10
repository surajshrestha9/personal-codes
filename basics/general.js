// setTimeout();
const setCounter =() => {
    const date = new Date();
    document.getElementById('clock').innerHTML=(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    // console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDay());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
}
setInterval(setCounter, 1000)