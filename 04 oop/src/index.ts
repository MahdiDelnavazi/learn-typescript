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


// use static
class Ride {
    private static _activeRiders: number = 0;

    start() { Ride._activeRiders++; }
    stop() { Ride._activeRiders--; }

    static get activeRide() {
        return Ride._activeRiders;
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRide)

// inheritance
class Person {
    constructor(public firstName: string, public lastName: string) { }

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    walk() {
        console.log('walking')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

}
let student = new Student(1, 'mahdi', 'delnavazi');
// from super class
student.walk();
student.firstName;

// override
class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}

// polymorphism
printNames([
    new Student(1, 'mahdi', 'delnavazi'),
    new Teacher('mahdi', 'delnavazi')
])

function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName)
    }
}

// abstract
abstract class Shape {
    constructor(public color: string) { }
    abstract render(): void
}
class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }

    override render(): void {
        console.log('rendering circle')
    }
}

let circle = new Circle(12, 'red')
circle.render()

// interface
// abstract class Calendar {
//     constructor(public name: string) { }

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }
interface ICalendar {
    name: string;
    addEven(): void;
    removeEven(): void;
}

class GoogleCalendar implements ICalendar {
    constructor(public name: string) { }
    addEven(): void {
        throw new Error("Method not implemented.");
    }
    removeEven(): void {
        throw new Error("Method not implemented.");
    }

}