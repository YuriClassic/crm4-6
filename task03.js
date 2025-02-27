'use strict';

function generateRandomArray(length, n, m, type) {
    // Проверка, что length - положительное число
    if (typeof length !== 'number' || length <= 0) {
        throw new Error('Параметр length должен быть положительным числом');
    }

    // Проверка, что n и m - числа
    if (typeof n !== 'number' || typeof m !== 'number') {
        throw new Error('Параметры n и m должны быть числами');
    }

    // Определяем минимальное и максимальное значение для диапазона
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    const randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNumber;

        // Генерация случайного числа в заданном диапазоне
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while ((type === 'even' && randomNumber % 2 !== 0) || (type === 'odd' && randomNumber % 2 === 0));

        randomArray.push(randomNumber);
    }

    return randomArray;
}

const type = 'even'; // Опциональный параметр: 'even' или 'odd'
console.log(randomNumbers);