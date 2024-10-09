/*
Дан элемент страницы. Нажмем на этот элемент, тем самым активировав его. Повторное нажатие на страницу должно приводить к перемещению элемента (его центра) в эту точку клика.
*/
const element = document.getElementById('myElement')
let isActive = false

element.addEventListener('click', () => {
  isActive = !isActive

  if(isActive) {
    element.classList.add('active')
  } else {
    element.classList.remove('active')

    document.addEventListener('click', moveElement)
  }
})

function moveElement(event) {
  const x = event.clientX // Получаем координату по горизонтали
  const y = event.clientY // Получаем координату по вертикали

  const elementWidth = element.offsetWidth // Получаем ширину элемента
  const elementHeight = element.offsetHeight // Получаем высоту элемента

  const centerX = x - elementWidth / 2 // Получаем координату по горизонтали в центре элемента
  const centerY = y - elementHeight / 2 // Получаем координату по вертикали в центре элемента

  element.style.left = `${x - centerX}px` // Перемещаем элемент в центр
  element.style.top = `${y - centerY}px` // Перемещаем элемент в центр

  document.removeEventListener('click', moveElement)
}