/*
NOTE: JAVASCRIPT IS A SINGLE-THREADED SYNCHRONOUS LANGUAGE
This means that JavaScript can execute only one task at a time and
it does so in a sequential manner, one after the other (SYNCHRONOUS).

--------------------------------------------------------------------
** Visualizing the Event Loop ** 

JavaScript Engine (V8, SpiderMonkey)
├── Call Stack (single thread)
└── Memory Heap

Browser/Node.js Runtime
├── Web APIs (separate threads!)
│   ├── setTimeout/setInterval
│   ├── fetch/XMLHttpRequest
│   ├── DOM events
│   └── FileSystem
└── Event Loop 
    ├── Microtask Queue (Promises)            - HIGHER PRIORITY
    └── Macrotask Queue (setTimeout, I/O)     - LOWER PRIORITY

--------------------------------------------------------------------
** How the Event Loop Works **

1. When JavaScript code is executed, functions are pushed onto the Call Stack.
2. If a function makes an asynchronous call (like setTimeout or fetch), the 'Web API' handles
it in a separate thread. (NOTE: browsers are multi-threaded, so these operations don't block the main thread)
3. Once the asynchronous operation is complete, its callback is placed in the appropriate 
queue: Microtask or Macrotask.
4. The 'Event Loop' continuously checks the CALL STACK. If it's empty
(bcz if call stack in not empty and we put process to call stack from queue as soon
as they arrive then different o/p can come on diff. runs), it first
processes all tasks in the Microtask Queue before moving on to the Macrotask Queue.
5. This ensures that Promises (Microtasks) are executed before other asynchronous callbacks
(Macrotasks), maintaining a predictable execution order.

*/

// Example to illustrate the Event Loop
console.log("Start");
setTimeout(() => {  // this(callback) will be transferred to web api
    console.log("Timeout");
}, 5000); // the callback will be moved to Macrotask queue after 5 sec and the counter is maintained by Web API

console.log("End");
