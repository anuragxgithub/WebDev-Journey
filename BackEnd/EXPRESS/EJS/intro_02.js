/* 
Interpolation Syntax:  (Context : EJS)
In EJS interpolation means embedding JavaScript values inside HTML.

                            TAGS
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

*/

const express = require("express");
const app = express();


app.set("view engine", "ejs");
const port = 8080;

app.listen(port, () => {
    console.log(`App is listening to port number : ${port}`);
})

app.get("/", (req,res) => {
    console.log("Requeset received!!");
    res.render("views2.ejs");
})