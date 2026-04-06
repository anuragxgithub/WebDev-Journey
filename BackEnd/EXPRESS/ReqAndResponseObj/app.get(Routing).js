/*
Routing: It is process of selecting a path for traffic in a network or between or 
across multiple networks.
Base on the URL(route) requested by the client we decide what response to send

app.get(path, callback [, callback ...])
Routes HTTP GET requests to the specified path with the specified callback functions.

*/

const express = require("express")
const app = express();


app.listen(3000, ()=> {
    console.log("Listening to port 3000");
})

// app.use((req, res) => {
//     console.log("Request received")
// })

app.get("/", (req,res)=> {  // this(/) is by default path ie root path
    res.send("You contacted root path.")
})

app.get("/search", (req,res)=> {
    res.send("You contacted search path.")
})

app.get("/help", (req,res)=> {
    res.send("You contacted help path")
})

/*

app.get("*", (req, res) => { 
    res.send("this path does not exist");  
})
this will be executed if get req has any path other than the specified ones above 
ie this runs when no other GET route matches

But removed from new version of express
other way is:
*/

// 404 handler
app.use((req, res) => {
    res.status(404).send("this path does not exist")
})