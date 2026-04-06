const express = require("express")
const app = express();


let port = 3000;

app.listen(port, ()=> {
    console.log(`app is listenting to port ${port}`)
})

app.use((req, res, next) => {
    // console.log(req.headers)
    console.log(res)
    // res.send("Hello this is my first response.")
    // res.send("<h2>List</h2> <li>Item1</li><li>Item2</li> <li>Item 3</li>")
    res.send({
        name: "Anurag",
        rollNum: 10
    })   // when we send js obj in response but express will convert it into json
    console.log("Request received")
})