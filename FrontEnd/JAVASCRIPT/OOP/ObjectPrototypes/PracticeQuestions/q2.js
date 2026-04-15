// Add trueLength method for all strings

let str = "A  nurag   ";
console.log(str.length);

// str.trueLength()   should give 6


// As we know string inherits from String.prototype
String.prototype.trueLength = function() {
    let cnt = 0;
    for(let char of this) {
        if(char != ' ') cnt++;
    }
    return cnt;
}


console.log(str.trueLength());