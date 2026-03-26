// Application of Closure to Create Private Variables
/*
function createBankAccount() {
    let balance = 300; // Private variable

    const user = {
        deposit: function(amount) {
            if(typeof amount === "number" && amount > 0){
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount) {
            if(typeof amount === "number" && amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance: function() {
            return balance;
        }
    }
    return user;
}
*/
    // --- same this as above but sometimes you can see it written like --- //

    function createBankAccount() {
    let balance = 300; // Private variable

    return {                            // same thing directly returning the object
        deposit: function(amount) {
            if(amount === "number" && amount > 0){
                this.balance += amount;
                return balance;
            }
        },
        withdraw: function(amount) {
            if(amount === "number" && amount > 0 && amount <= balance) {
                this.balance -= amount;
                return balance;
            }
        },
        getBalance: function() {
            return balance;
        }
    }
}


// you can't access balance variable frome here by any means
const customer = createBankAccount();
console.log(customer.getBalance());
console.log(customer.withdraw(100));
console.log(customer.deposit(100));