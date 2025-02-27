'use strict';

function generateRandomArray(length) {
  if (typeof length !== 'number' || length <= 0) {
      throw new Error('Параметр должен быть положительным числом');
  }

  const randomArray = [];
  for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
      randomArray.push(randomNumber);
  }

  return randomArray;
}

const arrayLength = 10; // Задайте желаемую длину массива
const randomNumbers = generateRandomArray(arrayLength);
console.log(randomNumbers);