class KeyValuePair<T>{
    constructor(public key: T, public value: string) { }
}

let pair = new KeyValuePair('1', '1')
let pair2 = new KeyValuePair(1, '1')