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
// Установка библиотеки: npm install number-to-words-ru
const convertNumberToWordsRu = require('number-to-words-ru').convert
let num = 1234567890

function convertNumber(num) {
  num = num.toString()

  let res  = convertNumberToWordsRu(num, {
    showNumberParts: {
        fractional: false, // отключаем дробную часть
    },
    showCurrency: {
        integer: false, // отключаем целую часть
    },
})

  return res
}

console.log(convertNumber(num))

