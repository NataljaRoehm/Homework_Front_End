// Создайте массив jedi, который представляет собой очередь. 
// Используя цикл while, добавьте в очередь элементы "Yoda", "Obi-Wan", "Qui-Gon", 
// с помощью метода push(). Затем, с использованием метода shift(),
//  удалите первый элемент из массива. Используйте оператор расширения (spread operator) 
//  для создания нового массива, который содержит элементы из исходной очереди,
//   а также добавьте элемент "Anakin" в конец нового массива с использованием метода push(). 
//   В переменную jediCount запишите число элементов в новом массиве.
//  Выведите сколько на планете джедаев и как их зовут. 

let jedi = [];

jedi.push("Yoda");
jedi.push("Obi-Wan");
jedi.push("Qui-Gon");
 
jedi.shift();

let newJedi = [...jedi];
newJedi.push("Anakin");

let jediCount = newJedi.length;

console.log(`Сколько на планете джедаев: ${jediCount}`);
console.log(`Их имена: ${newJedi.join(", ")}`);