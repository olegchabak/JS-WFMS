// методы у массивов

var cars = ['Ford','Mazda','Kia','BMW'];

// length = 4, но последний индекс = 3
console.log(cars.length)
console.log(cars[cars.length-1])

cars.push({q:'q'})
console.log(cars)

// изымает и возвращает последний елемент массива
var lastElem = cars.pop()
console.log(cars)
console.log('изымает и возвращает последний елемент массива ',lastElem)

// изымает и возвращает первый элемент массива
// изначальный массив уже изменен к этому моменту
var firstElem = cars.shift()
console.log(cars)
console.log('изымает и возвращает первый элемент массива ', firstElem)

// добавляет в начало элемент массива
cars.unshift('Audi')
console.log('добавляет в начало элемент массива ', cars)

// проверка на наличие значения в массиве
var index = cars.indexOf('Kia')
var curValue = cars[index]
console.log(curValue)
