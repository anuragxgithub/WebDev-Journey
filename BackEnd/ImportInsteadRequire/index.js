/*
import is introduced in ES6 EcmaScript 2015
see the notes to learn more about it.

import helps us to selectively load only the pieces we need which can save memory. (Unlike )
*/
import {sum, mul, PI} from "./math.js"
console.log(sum)
console.log(sum(1,5))
console.log(sum(3,5))

console.log(PI)