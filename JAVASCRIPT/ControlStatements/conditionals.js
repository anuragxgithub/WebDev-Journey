let age = 55;
if(age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

if(age >= 18 && age <= 50) {
    console.log("Young");
} else if(age < 18 && age > 0) {
    console.log("Kid");
} else {
    console.log("Old")
}