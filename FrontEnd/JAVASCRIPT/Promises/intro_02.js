console.log("Hello, World! Start")


const p1 = fetch('https://api.github.com/users');
console.log(p1)    // here p1 is a Promise object in pending state

// p1.then((response) => {
//     console.log(response.json());  // but it still not printing the actual content rather showing pending state
//     // this is becuase response.json() also returns a Promise
//     // so we need to chain another .then() to get the actual content
// })
const p2 = p1.then((response) => {
    return response.json(); // here we are returning another Promise
})

p2.then((data) => {
    console.log(data);  // here data (read from body) is the actual content
})
console.log("Hello, World! End")



// we can also chain the .then() methods like this:
// and avoid writing intermediate variables p1 and p2

fetch('https://api.github.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    // console.log(data);
})
