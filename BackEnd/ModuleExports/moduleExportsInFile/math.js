const sum = (a,b) => a+b;
const mul = (a,b) => a*b;

const PI = 3.14
const g = 9.8

// module.exports = 123   
// module.exports = PI   

module.exports = {
    sum : sum, // key (property name) → "sum" (always a string internally)
    mul : mul,
    PI : PI,
    g : g
}

// shorter way

// module.exports.sum = (a,b) => a+b;

// even shorter way

// exports.mul = (a,b) => a*b;

/*
note:
module.exports = 5    work
but
exports = 5 won't work
bcz here exports ain't adding any property of fun to the module.object

NOTE2:
modules.exports  the fallback mechanism is used that is it export the last item which is marked 
as module.exports
*/
