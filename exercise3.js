"use strict";
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else
        (typeof value !== 'number' && value !== 'string');
    {
        throw 'value deve ser um número ou uma string';
    }
}
console.log(toNumber(true));
