// Создайте пустой массив numbers.
//  Добавьте в него числа 1, 2, 3 с использованием метода push(). 
//  Затем удалите последний элемент из массива с помощью метода pop(). 
//  Используйте оператор расширения (spread operator) 
// для создания нового массива, 
//  который содержит числа из исходного массива, 
//  а также добавьте число 0 в начало этого нового массива. 
//  Добавьте случайное число от 99 до 999 в начало массива используя unshift().
//  Выведите результат в консоль.

const numbers = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);

numbers.pop();

const newNumbers = [0, ...numbers];
const randomNumber = Math.floor(Math.random() * (999 - 99 + 1)) + 99;
newNumbers.unshift(randomNumber);

console.log(newNumbers);