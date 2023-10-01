// Создайте массив с названиями городов "London", "Paris", "Berlin", "Madrid". 
// Используя пройденные на занятии методы массива получите из массива новый массив, 
// в котором элементы идут в обратной последовательности

let cities = ["London", "Paris", "Berlin", "Madrid"];

let reversCities = []

for (let i = cities.length - 1; i >=0; i--) {
     reversCities.push(cities[i]);}
     console.log(reversCities);    
