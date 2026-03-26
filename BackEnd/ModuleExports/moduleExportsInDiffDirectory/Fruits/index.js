/*
NOTE: We make a file in the directory from where we want to export data to other directory
And the name should be "index.js" this is important and is convention.
Now you can require whatever data are to be exported from different files in this directory
now other directory will only require this file

MORE Accurately:

We can create an index.js file in a directory to centralize exports from multiple files. This is a convention, not a requirement. When a folder is required, Node.js automatically looks for index.js inside it, allowing us to export all functionality through a "single entry point".

-index.js = default entry point
-Any other name = you must:
-either write full path
-or configure in package.json
*/

const apple = require("./apple")
const mango = require("./mango")
const guava = require("./guava")

const fruits = [apple, mango, guava]

module.exports = fruits;