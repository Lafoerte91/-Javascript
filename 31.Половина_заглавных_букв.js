/*
Дана строка с маленькими буквами и пробелами. Сделайте заглавными половину случайных букв этой строки, игнорируя пробелы.
*/

const text = 'но глубокий уровень слова предоставляет широкие возможности для мечты и надежды'

function makeHalfUppercase(inputString) {
  let uppercaseCount = Math.ceil(inputString.length / 2) // Кол-во букв в верхнем регистре
  inputString = inputString.split('') // Преобразуем строку в массив
  for(let i = 0; i < uppercaseCount; i++) {
    let randomIndex = Math.floor(Math.random() * inputString.length) // Генерируем случайный индекс
    inputString[randomIndex] = inputString[randomIndex].toUpperCase() // Переводим букву в верхний регистр
  }
  return inputString.join('') // Преобразуем массив обратно в строку
}

console.log(makeHalfUppercase(text))