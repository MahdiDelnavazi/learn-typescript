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
kgToLbs(10)
kgToLbs('10') 