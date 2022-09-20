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
//# sourceMappingURL=index.js.map