/* 
Templating:
Templating is a technique used to generate dynamic HTML by combining a template (blueprint) with data.


EJS : (Embedded Javascript Templates)
EJS is a simple templating language that lets u generte HTML markup with plain JavaScript.

NOTE: 
EJS is also a package but we don't need to require it bcz express internally require it already
*/

const express = require("express");  // NOTE: ⚠️ the place(dir.) from where this express is getting required in that dir. ejs package should be installed in order to use here (you might get stuck if this express is global and you are requiring it from some other dir and you just installed ejs in this dir.)
// OR 
// jis directory me views folder hai usi directory me se hame file run krna hai if we run this like from other directory and from their doing node /Express/EJS/intro_01.js will result in error

/* To fix this we can add two line 
const path = require("path")
app.set("views", path.join(__dirname, "/views"))
*/

const app = express();
const path = require("path")  // path is a built-in module of node.js
// console.log(path);

const port = 8080;

app.set("view engine", "ejs")  //tells express “Use EJS as the template engine to render HTML”
app.set("views", path.join(__dirname, "/views")) // Joins multiple path segments into one correct file path


app.listen(port, () => {
    console.log(`App is listening to port number : ${port}`);
})

app.get("/", (req, res) => {
    console.log("Request received")
    res.render("views.ejs");  //res.render() is used to generate HTML from a template and send it as a response to the client.
})



/*
Why path.join() ?
Because different OS use different separators:

OS	Separator
Windows	\
Linux/Mac	/

👉 path.join() automatically handles this ✅
*/