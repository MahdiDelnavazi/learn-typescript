class KeyValuePair<T>{
    constructor(public key: T, public value: string) { }
}

let pair = new KeyValuePair('1', '1')
let pair2 = new KeyValuePair(1, '1')

// generic array
class ArrayUtils {
    static wrapInArray<T>(value: T){
        return[value];
    }
}

let numbers = ArrayUtils.wrapInArray(1);
let strings = ArrayUtils.wrapInArray('1');

//add something