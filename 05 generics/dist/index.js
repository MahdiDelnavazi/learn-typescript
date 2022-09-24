"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', '1');
let pair2 = new KeyValuePair(1, '1');
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray(1);
let strings = ArrayUtils.wrapInArray('1');
//# sourceMappingURL=index.js.map