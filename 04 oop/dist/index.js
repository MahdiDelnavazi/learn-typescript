"use strict";
class Account {
    constructor(id, name, age, _balance) {
        this.id = id;
        this.name = name;
        this.age = age;
        this._balance = _balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    balance() {
        return this._balance;
    }
}
let account = new Account(1, 'mahdi', 24, 0);
account.deposit(100);
console.log(account);
class Account2 {
    constructor(id, name, age, _balance) {
        this.id = id;
        this.name = name;
        this.age = age;
        this._balance = _balance;
    }
    get Balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('invalid parameter');
        }
        else {
            this._balance = value;
        }
    }
}
class Seats {
}
let seats = new Seats();
seats.A1 = 'mahdi';
seats['A1'] = 'mahdi';
//# sourceMappingURL=index.js.map