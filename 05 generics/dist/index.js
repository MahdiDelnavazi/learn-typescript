"use strict";
var _a, _b;
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
function fetch(url) {
    return { data: null, error: null };
}
let resultUser = fetch('user');
(_a = resultUser.data) === null || _a === void 0 ? void 0 : _a.userName;
let resultProduct = fetch('product');
(_b = resultProduct.data) === null || _b === void 0 ? void 0 : _b.title;
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchebaleStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
//# sourceMappingURL=index.js.map