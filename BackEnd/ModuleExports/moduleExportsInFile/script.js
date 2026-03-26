const math = require("./math.js")
console.log(math)
console.log(math.sum(7,2))

/*
You can also do this : 

const {sum, ..} = require("./math.js")  
console.log(sum)
console.log(sum(7,2))


basically importing only required stuff from exported data NOTE this only works with when object type value is exported
*/