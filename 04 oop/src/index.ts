// classes
class Account {
    id: number;
    name: string;
    age: number;
    private _balance: number; // private properties only can read inside class 
    nickname?: number; // optional property

    constructor(id: number, name: string, age: number, _balance: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this._balance = _balance;
    }

    // create methods for class ...
    deposit(amount: number) {
        this._balance += amount
    }

    // work with private property 
    balance(): number {
        return this._balance
    }
}

// create instance of class
let account = new Account(1, 'mahdi', 24, 0);
account.deposit(100)
console.log(account)

// another way for create class with get and set methods for private properties
// and we have new properties initialize in constructor 
class Account2 {
    nickname?: number; // optional property

    constructor(
        public id: number,
        public name: string,
        public age: number,
        private _balance: number) {

    }

    // work with private property 
    get Balance(): number {
        return this._balance
    }

    set balance(value: number) {
        if (value < 0) {
            throw new Error('invalid parameter');
        } else {
            this._balance = value
        }
    }
}


// index signature property
class Seats {
    [seatNumber: string]: string;
}
let seats = new Seats();
// we can use both
seats.A1 = 'mahdi'
seats['A1'] = 'mahdi'
