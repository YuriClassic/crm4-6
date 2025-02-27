'use strict';

function generateRandomArray(length, n, m) {
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
        // Генерация случайного числа в заданном диапазоне
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }

    return randomArray;
}


const n = -20; // Начало диапазона
const m = 30; // Конец диапазона
console.log(randomNumbers);