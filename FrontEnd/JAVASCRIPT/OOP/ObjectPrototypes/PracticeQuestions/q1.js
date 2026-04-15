
/* 
Problem Statement:
Add function anurag() that is present across all object.

Add function countOnes() that are present in all arrays and count number of ones.
*/

// Adding anurag() in root prototype object i.e, (Object.prototype) final link in prototype chain
Object.prototype.anurag = () => {
    console.log("Anurag is present for all object");
}

arr = [1,2,3]
arr.anurag()

obj = {
    name: "Anurag"
};

obj.anurag();


arr1 = [1,2,3,1,4,1];
arr2 = [1,2,1,1,4,1];

Array.prototype.countOnes = function() {
    let cnt = 0;
    for(let val of this) {
        if(val == 1) {
            cnt++;
        }
    }
    console.log(`The number of 1s present in array is : ${cnt}`);
}


arr1.countOnes();
arr2.countOnes();