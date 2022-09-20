"use strict";
class Account {
    constructor(id, name, age, balance) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
let account = new Account(1, 'mahdi', 24, 0);
account.deposit(100);
console.log(account);
//# sourceMappingURL=index.js.map