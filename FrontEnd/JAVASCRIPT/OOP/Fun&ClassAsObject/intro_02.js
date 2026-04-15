/* 
... continue
*/
// 6. What happens when you do fn()?
function sayHi() {
  console.log("Hi");
}

sayHi();
/* 
👉 Internally, engine does something like:
Call sayHi.[[Call]]()

That [[Call]]:
-Creates execution context
-Sets 'this'
-Runs the function body 

*/

// 7. Where does [[Call]] come from?
function foo() {}

/* 
The engine creates an object like:
foo = {
  [[Call]]: function execution logic,
  [[Prototype]]: Function.prototype,
  prototype: { constructor: foo }
}
That hidden [[Call]] is the reason foo() works.
NOTE: This [[Call]] can't be access or viewed, you can do console.dir(foo) you won't find it there
*/





/* 
9. So what is a function really?
A function is:
{
  properties: {...},
  [[Prototype]]: Function.prototype,
  [[Call]]: makes it callable,
  [[Construct]]: (optional) makes it usable with new
}
*/