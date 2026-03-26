// it is not necessary that all objects by default has that same 
// prototype Object.prototype

const date = new Date();
let obj = date;

do {
    obj = Object.getPrototypeOf(obj);
    console.log(obj)
}while(obj)

// run in browser