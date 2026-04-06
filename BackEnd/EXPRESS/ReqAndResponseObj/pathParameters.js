/*
We cannot write paths again and again for different paths. Take eg : of  username on ig
there are billions of username it is practically not possible to write that much of path
for these usernames.
So we use path parameters in which we treat paths as a variable

path parameters are dynamic values inside the URL path that you can capture and use in your server.
Use colon(:) before the 'name' of path to make 'that' path parameter
*/

const express = require("express")
const app = express();


app.listen(3000, ()=> {
    console.log("Listening to port 3000");
})

app.get("/", (req,res)=> {  // this(/) is by default path ie root path
    res.send("You contacted root path.")
})

app.get("/:username/:id", (req, res) => {
    console.log(req.params)
    const {username, id} = req.params;
    // res.send(`hey ${req.params.username} your id is : ${req.params.id}`)
    res.send(`<h1>Hey welcome to the page of ${username}</h1`)
})