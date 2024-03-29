/*
Сделайте обратный отчет до даты. Он должен выводить сколько времени осталось до заданной даты в следующем формате: 12 дней 15 часов 12 минут 58 секунд.
*/
let countDownDate = new Date('2024-10-05').getTime()
let timer = setInterval(function() {
  let now = new Date().getTime()
  let distance = countDownDate - now
  console.log(
    Math.floor(distance / (1000 * 60 * 60 * 24)) + ' дней ' +
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ' часов ' +
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + ' минут ' +
    Math.floor((distance % (1000 * 60)) / 1000) + ' секунд'
  )
  if(distance < 0) {
    clearInterval(timer)
    console.log('Время вышло')
  }
}, 1000)

console.log(timer)