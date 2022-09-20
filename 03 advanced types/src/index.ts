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

