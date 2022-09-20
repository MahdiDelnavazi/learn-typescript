"use strict";
let employee = {
    id: 1,
    name: 'mahdi',
    retire: (date) => {
        console.log(date);
    }
};
let weight;
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
quantity = 100;
function greet(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log('name is null');
    }
}
let phone = document.getElementById('phone');
let phone2 = document.getElementById('phone');
//# sourceMappingURL=index.js.map