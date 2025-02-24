'use strict';

function getAverageValue(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((acc, value) => acc + value, 0);
    const average = sum / arr.length;
    return Math.floor(average);
}

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const averageCheck = getAverageValue(allCashbox);
console.log(averageCheck);