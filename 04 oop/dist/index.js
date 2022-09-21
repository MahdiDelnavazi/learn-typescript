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
class Ride {
    start() { Ride._activeRiders++; }
    stop() { Ride._activeRiders--; }
    static get activeRide() {
        return Ride._activeRiders;
    }
}
Ride._activeRiders = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRide);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
let student = new Student(1, 'mahdi', 'delnavazi');
student.walk();
student.firstName;
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
printNames([
    new Student(1, 'mahdi', 'delnavazi'),
    new Teacher('mahdi', 'delnavazi')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('rendering circle');
    }
}
let circle = new Circle(12, 'red');
circle.render();
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEven() {
        throw new Error("Method not implemented.");
    }
    removeEven() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=index.js.map