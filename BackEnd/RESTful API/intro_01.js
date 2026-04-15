/* 

Create a quora page using restful apis and perfomr
crud uperations delete post read post edit post
get post of specific user.

NOTE: ⚠️
👉 Browsers remember the last request as part of session history

This is part of:

HTTP is stateless (no memory on its own)
Browser maintains navigation history + request state
🌐 What does “remember last request” mean?

When you visit a page, the browser stores:

URL
HTTP method (GET / POST)
Form data (in case of POST)
Response received

👉 So when you press refresh, browser says:

“Repeat the same request again”

*/

const express = require('express')
const app = express();
const port = 3000;
let path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // means make the public folder accessible firectly from browser
app.use(express.urlencoded({extended: true}))

const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
app.use(methodOverride('_method'))

app.listen(port, () => {
    console.log(`App is listening to port number : ${port}`);
})

let posts = [
  { id: uuidv4(), username: "alice", content: "Hello everyone!\nHope you're having a great day." },
  { id: uuidv4(), username: "bob", content: "Just finished my work.\nTime to relax a bit." },
  { id: uuidv4(), username: "charlie", content: "Learning JavaScript is fun.\nPractice makes it better." },
  { id: uuidv4(), username: "diana", content: "Enjoying some good music.\nFeeling positive today." }
];


app.get("/posts", (req, res) => {
    console.log("Request received");
    res.render("index.ejs", {posts});
})

// create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

// submit form (post created)
app.post("/posts", (req, res) => {  // note: here we are submitting form from '/posts/new' but here metioned only '/posts' because form's action in html/ejs decides where to send request
    // let info = req.body;
    let {username, content} = req.body;
    posts.push({username, content, id: uuidv4()});

    /* res.render("index.ejs", {posts}); 
    Works, but not ideal (refresh may resubmit form bcz browser may think last req was
    post should i send it again)  */

    // So now we want to connect our pages, for that we have .redirect(url)
    res.redirect("/posts");
})
// if we go create post and then add the post in these process these req is happening:
// get(browser's initial req for reqesting page) -> get(when clicked on create post)
// post(when form is submitted) get(when redirected (redirection basically req for new page that is get req itself))

// see post
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("show.ejs", {post});
})

app.get("/posts/:id/edit", (req, res)=> {
    let {id} = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs", {post})
})


// edit post (update post)  // you can use put method too almost same syntax
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params; // id will be in url
    let post = posts.find((p) => p.id === id);
    // console.log(post)
    post.content = req.body.content;
    // console.log(post)
    res.redirect("/posts");
})
// Note the edit post stuff can also be done using post req. but it breaks the 
// rest principles, harder to scale and less calrity


app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => p.id !== id);  // storing back to the same array
    res.redirect("/posts");
})
