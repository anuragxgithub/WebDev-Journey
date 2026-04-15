/* 
GET Request: 
A GET request is an HTTP request used to fetch data from the server.
While requesting data, the client can also send small amounts of data using a query string (in the URL).
This is because GET is designed mainly for retrieving data, and the URL is a simple way to attach small, non-sensitive data to the request.
However, it is not suitable for sending large or sensitive data because the data is visible and size-limited(bcz url len. is fixed diff for diff browsers).

POST Request:
A POST request is an HTTP request used to send data from the client to the server.
While sending data, the client sends it in the request body (not in the URL).
This is because POST is designed for sending larger or sensitive data securely, and the body allows more data without URL limitations.
However, it is not used for simple data retrieval like GET, and the data is not visible in the URL.
NOTE:
👉 By default, Express.js cannot read request body
You must use middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

*/

const express = require("express")
const app = express()
const port = 3000;

app.use(express.urlencoded({extended: true}))  // means if any encoded data comes in request body then express automatically understand it by parsing
app.use(express.json())  // used in the case if client send data in json form

app.listen(port, ()=> {
    console.log(`Server is listening to port number: ${port}`);
})

app.get("/register", (req, res) => {
    console.log("Request received!!");
    // console.log(req.query)
    let {user, password} = req.query;
    console.log(user, password);
    res.send(`Standard get response. Welcome ${user}`);
})
app.post("/register", (req, res) => {
    console.log("Request received!!");
    console.log(req.body)
    let {user, password} = req.body;
    res.send(`Standard post response. Welcome ${user}`);
})