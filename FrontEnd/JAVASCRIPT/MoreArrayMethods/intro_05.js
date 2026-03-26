// Data Structure: Set

const arr = [10, 20, 25, 30, 10, 20, 20, 29, 25];

const set1 = new Set(arr);
console.log(set1);
set1.add(12);
console.log(set1);
console.log(set1.has(10))

const email = ["ro@gm", "ra@gm", "ta@gm", "ro@gm", "ta@gm"]
const unique_email = [...new Set(email)];  // taking back the unique emails in an array
console.log(unique_email);

// set1.clear()     // empties the set  

