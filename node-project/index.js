// ES5
const http = require("http");
const app = http.createServer((request, response) => {
    // console.log(request);
    // let auth = request.headers.authorization

    // query string 
    let query = request.url;
    let method = request.method;
    // query  ?
    // param /
    // hidden field body  
    console.log(method, query);
    response.end("hello");
});
// 0- 65535
app.listen(9005, "localhost", (err) => {
    if(err) {
        console.error("Connection error: "+err);
    } else {
        console.log("Server is listening to port: 9005");
        console.log("Press CTRL+C to end server call.");
    }
});