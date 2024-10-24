/*
Сделайте функцию, каждый новый вызов которой будет выдавать следующее число Фибоначчи.
*/
let a = 0
let b = 1

function nextFibonacci() {
  let temp = a
  a = b
  b = temp  + b

  return a
}

console.log(nextFibonacci())
console.log(nextFibonacci())
console.log(nextFibonacci())
console.log(nextFibonacci())
console.log(nextFibonacci())