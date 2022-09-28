// generic class
class KeyValuePair<T>{
    constructor(public key: T, public value: string) { }
}

let pairNumber = new KeyValuePair('1', '1');
pairNumber.key.split;
let pairString = new KeyValuePair(1, '1');
pairString.key.toExponential;

// generic array
class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let numbers = ArrayUtils.wrapInArray(1);
let strings = ArrayUtils.wrapInArray('1');

//generic interface
// http://myWeb.com/users
// http://myWeb.com/products
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null };
}

interface User {
    userName: string;
}

interface Product {
    title: string;
}

let resultUser = fetch<User>('user');
resultUser.data?.userName

let resultProduct = fetch<Product>('product');
resultProduct.data?.title


// generic inheritance
interface Product {
    name: string,
    price: number
}

class Store<T>{
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() { }
}

// restrict the generic type parameter
class SearchebaleStore<T extends { name: string }> extends Store<T>{
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

