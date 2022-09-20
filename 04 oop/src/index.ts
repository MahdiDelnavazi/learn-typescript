// classes
class Account {
    id: number;
    name: string;
    age: number;
    balance: number;

    constructor(id: number, name: string, age: number, balance: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount
    }
}
// create instance of class
let account = new Account(1, 'mahdi', 24, 0);
account.deposit(100)
console.log(account)