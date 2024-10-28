/*
Дано некоторое число:
let num = 1234567890
Выведите это число прописью:
`
  один миллиард двести тридцать четыре миллиона
  пятьсот шестьдесят семь тысяч восемсот девяносто
`
Ваш код, конечно же, должен быть универсальным и работать для любых чисел в пределах миллиардов.
*/
// Установка библиотеки: npm install number-to-words
let num = 1234567890

function numToWord(num) {
  const toWords = require('number-to-words')
  const formattedNumber = toWords.toWords(num, {lang: 'ru'})

  return formattedNumber
}

console.log(numToWord(num))