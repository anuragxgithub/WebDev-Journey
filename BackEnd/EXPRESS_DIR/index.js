const express = require("express") // NOTE: here express is a fn
const app = express(); // it returns an object by convention name it app


// console.dir(app)

let port = 3000;  // or 8080

app.listen(port, ()=> {  
    console.log(`app is listening on port ${port}`);
})
// note once we run this file our server starts and it will keep
// listening for the req once started untile we stop it.

// after running the server when we check on browser it will not show
// site cant be reached rather gives error "cannot GET"
// because we are not giving any response. (i.e proved server is on) 



/*
A port is a logication end point of a network connection 
that is used to exchange information between web server and web client.
*/


app.use((req, res) => {
    console.log("Request received");
})
/*
app.use() is used to register middleware functions that run during the request–response cycle.

🔸 Simple meaning
👉 It tells Express:
“Whenever a request comes, run this function”


What is middleware?   (here our callback fn is middleware)
👉 A function that has access to:
req (request)
res (response)
next (to pass control)
*/