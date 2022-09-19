let sale: number = 123_456_789; // number
let course: string = 'TypeScript'; // string
let isPublished: boolean = true; // boolean

let level; // any
level = 1;
level = 'mahdi'

// with out type annotation
let aSale = 123_456_789; // number
let aCourse = 'TypeScript'; // string
let aIsPublished = true; // boolean

let numbers: number[] = [1, 3, 5]; // array
let numbers2 = [1, 3, 5, '7']; // any array
let numbers3: [number, string] = [1, 'mahdi']; // exactly two element with type

enum size { small = 1, medium, large } // enum small = 1 , medium = 2 , large = 3
enum size2 { small = 's', medium = 'm', large = 'l' }
