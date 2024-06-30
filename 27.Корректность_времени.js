/*
Дано время в формате часы:секунды. Проверьте то, что время является корректным: часы от 00 до 23, а минуты от 00 до 59.
*/

let time = '12:34'
time = time.split(':')
const hour = time[0]
const minute = time[1]

if(hour >=00 && hour <= 23 && minute >= 00 && minute <= 59) {
  console.log('Время корректно')
} else {
  console.log('Время некорректно')
}
