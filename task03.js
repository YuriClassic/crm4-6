'use strict';

function addPrefix(names, prefix) {
    return names.map(name => `${prefix} ${name}`);
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const result = addPrefix(names, 'Mr');
console.log(result);

addPrefix(names, 'Mr')