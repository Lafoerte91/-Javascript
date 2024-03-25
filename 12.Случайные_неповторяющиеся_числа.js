/*
Сделайте функцию, которая будет выдавать случайные целые числа из заданного диапазона, но так, чтобы вызовы функции не выдавали два одинаковых числа подряд.
*/
let previousNumber = null

function getRandomNinRepeatoing(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  while(randomNum === previousNumber) {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  }
  previousNumber = randomNum
  return randomNum
}

// Пример вызова функции и вывод результатов
const minNum = 1
const maxNum = 10

for (let i = 1; i <= 10; i++) {
  const random = getRandomNinRepeatoing(minNum, maxNum)
  console.log(random)
}