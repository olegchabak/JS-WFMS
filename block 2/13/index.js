// Встроенннные методы строк
var message = 'Hello world'

console.log(message.length); // длина строки
console.log(message.toUpperCase()); // к верхнему регистру
console.log(message.toLowerCase()); // к нижнему регистру
console.log(message.charAt(0)) // определение символа по индексу

// проверка на определенное содержание, возвращает индекс при совпадении ( => 6), или -1 при его отсутствии, регистр учитывается
console.log(message.indexOf('wo'))

// забирает подстроку у строки
// принимает 2 параметра: позиция начала (напр. 1) и кол-во получаемых символов (напр. 2)
console.log(message.substr(0, 5))

// комбо - вытаскиваем слово world
console.log(message.substr(message.indexOf('world'), 5))

// возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
console.log(message.substring(6, 9))

// комбо - убрать первый и последни символы
console.log(message.substring(1, message.length - 1))