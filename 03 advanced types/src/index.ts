// objects with advance types
// type alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'mahdi',
    retire: (date: Date) => {
        console.log(date)
    }
};

// union types
let weight: number | string;

function kgToLbs(weight: number | string): number {
    // narrowing : narrow the parameter to specific type 
    if (typeof weight === 'number') {
        // weight with number properties
        return weight * 2.2
    } else {
        // weight with string properties
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10);
kgToLbs('10');

// with '&' we can have both types in one variable
// in this case UIWidget is both Draggable and Resizable
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// use Literal for exact or specific value
type Quantity = 50 | 100;
let quantity: Quantity = 50;
quantity = 100;
// quantity = 110 <- have an error

type Metric = 'cm' | 'inch'; // another example for using Literal


// nullable variables 
function greet(name: string | null) {
    // check if name is null or not
    if (name) {
        console.log(name)
    } else {
        console.log('name is null')
    }
}

// type assertion
let phone = document.getElementById('phone') as HTMLElement;
// or 
let phone2 = <HTMLElement>document.getElementById('phone');
// now we can have phone.value


// Narrowing 
function render(document: unknown) {
    if (typeof document === 'string') {
        // now we and compiler knows the document have type string
        // soo we have string methods in our parameter
        // document.split
    }
}


