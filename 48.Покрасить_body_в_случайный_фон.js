/*
Сгенерируйте случайное шестнадцатеричное значение для свойства background-color и установите его для тега body. Сделайте так, чтобы цвет менялся каждые 5 секунд.
*/
function randomColorBody() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16) // Сгенерируем случайное шестнадцатеричное значение
  document.body.style.backgroundColor = '#' + randomColor

  setTimeout(randomColorBody, 5000)
}

randomColorBody()