/* 
inlclude (in ejs) : It is used to reuse one template inside another template.
*/

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");


app.listen(port, () => {
    console.log(`Server is listening to port number : ${port}`);
})

app.get("/include", (req, res) => {
    console.log("Request recieved!!")
    res.render("includeDemo.ejs");
})