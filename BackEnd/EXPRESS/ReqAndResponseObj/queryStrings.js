/* 
Query string : query string is a way to send extra data in the URL after a ?.
*/

const express = require("express")
const app = express();


app.listen(3000, ()=> {
    console.log("Listening to port 3000");
})


app.get("/", (req,res)=> {  // this(/) is by default path ie root path
    res.send("You contacted root path.")
})

app.get("/search", (req,res)=> {
    console.log(req.query);
    let {q} = req.query;    // object destructuring quivalent to q = req.query.q;
    if(!q) {   // this thing work if you start writing your query with q=..
        res.send("Nothing searched")
    } else {
        res.send("You contacted search path.")
    }
})