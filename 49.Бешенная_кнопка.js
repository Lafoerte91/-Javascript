/*
Сделайте кнопку, которая будет убегать от пользователя на десяток пикселей, при попытке навести на нее мышь, чтобы нажать. Кнопка не должна убегать за экран.
*/
const button = document.querySelector('#myButton')

button.addEventListener('mouseenter', function() {
  const buttonRect = this.getBoundingClientRect() // Получаем координаты левого верхнего угла элемента относительно окна браузера
  const buttonWidth = buttonRect.width // Ширина
  const buttonHeight = buttonRect.height // Высота
  // Генерируем случайное направление
  const direction = Math.floor(Math.random() * 4)
  let newX = buttonRect.left // Начальные координаты
  let newY = buttonRect.top // Начальные координаты
  // Изменяем координаты на 10 пикселей в зависимости от направления
  switch (direction) {
    case 0: // Вверх
      newY -= 10
      break
    case 1: // Вниз
      newY += 10
      break
    case 2: // Влево
      newX -= 10
      break
    case 3: // В
      newX += 10
      break
  }
  // Проверяем, не выходит ли кнопка за пределы экрана
  // По оси X
  if(newX < 0)   newX = 0 // Левая граница
  if(newX + buttonWidth > window.innerWidth) newX = window.innerWidth - buttonWidth // Правая граница
  // По оси Y
  if(newY < 0) newY = 0 // Верхняя граница
  if(newY + buttonHeight > window.innerHeight) newY = window.innerHeight - buttonHeight // Нижняя граница
  // Перемещаем кнопку
  this.style.position = 'absolute'
  this.style.left = newX + 'px'
  this.style.top = newY + 'px'
})