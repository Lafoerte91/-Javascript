/*
По заходу на страницу должен начать тикать обратный отсчет от 100 до 0. Как только отсчет дойдет до нуля - он должен остановится и должна появится надпись о том, что отсчет окончен. Отсчет должен продолжаться с прерванного места и после обновления страницы.
*/
let counter = 100
let intervalId

function startCountdown() {
  const countdownElement = document.querySelector('#countdown')
  const messageElement = document.querySelector('#message')
  countdownElement.textContent = counter
  intervalId = setInterval(() => {
    counter--
    countdownElement.textContent = counter

    if(counter == 0) {
      clearInterval(intervalId)
      countdownElement.textContent = ''
      messageElement.textContent = 'Отсчет окончен!'
    }
  }, 1000)
}

function resumeCountdown() {
  if(counter > 0) {
    startCountdown()
  }
}
// Проверяем, есть ли сохраненный counter в LocalStorage
const savedCounter = localStorage.getItem('countdownCounter')

if(savedCounter) {
  counter = parseInt(savedCounter)
}
// Запускаем обратный отсчет при загрузке страницы
window.addEventListener('load', resumeCountdown)
// Сохраняем counter в LocalStorage перед перезагрузкой страницы
window.addEventListener('beforeunload', () => localStorage.setItem('countdownCounter', counter))