// методы у чисел

console.log(42)
console.log(1.4)
console.log(-8/3)
console.log(0xAE)
console.log(2e3)
// typeof NaN = number o_O
console.log(typeof NaN)
console.log(7/0) // => infinity - type number

var num = 777;
console.log(num.toString()) // к строке

var delta = 8/3
// .toFixed оставляет нужное количество знаков после точки
console.log(+delta.toFixed(3)) // 2.667

// проверка на "нечисло"
console.log(isNaN(NaN)) // true
console.log(isNaN(44)) // false

// проверка на "конечность"
console.log(isFinite(1/0)) // false
console.log(isFinite(44)) // true

