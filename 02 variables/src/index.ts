// data types
let sale: number = 123_456_789; // number
let course: string = 'TypeScript'; // string
let isPublished: boolean = true; // boolean

let level; // any
level = 1;
level = 'mahdi';

// with out type annotation
let aSale = 123_456_789; // number
let aCourse = 'TypeScript'; // string
let aIsPublished = true; // boolean

// arrays
let numbers: number[] = [1, 3, 5]; // array
let numbers2 = [1, 3, 5, '7']; // any array
let numbers3: [number, string] = [1, 'mahdi']; // exactly two element with type

// enums
enum size { small = 1, medium, large }; // enum small = 1 , medium = 2 , large = 3
enum size2 { small = 's', medium = 'm', large = 'l' };
const enum size3 { small = 's', medium = 'm', large = 'l' }; // const enum make compiler generate more optimize code

// functions
function calculateTax(income: number) { // without annotation for return type
    return 0;
}

function calculateTax2(income: number): number { // with annotation for return type
    return 0;
}

function calculateTax3(income: number): void { // void means this function don`t return anything
}

function calculateTax4(income?: number): void { // if we write "?" after parameter, thats goes to optional parameter to pas
}

// objects
let employee: { // object with initialized value
    id: number,
    name: string
} = { id: 1, name: 'mahdi' };

let employee2: { // readonly properties cant change value later
    readonly id: number,
    name: string
} = { id: 1, name: 'mahdi' };
// employee2.id = 2 cannot assign to 'id' because it is readOnly


let employee3: { // object with method
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'mahdi',
    retire: (date: Date) => {
        console.log(date)
    }
};
