/*
Дано окно браузера. Условно его можно разделить на правую и левую половины. Пусть теперь на странице даны элементы. Сделайте так, чтобы элементы, целиком находящиеся в левой половине окна покрасились в зеленый цвет, целиком находящиеся в правой половине окна - в синий, а находящиеся и там, и там - в красный.
*/
const windowWidth = window.innerWidth // ширина окна
const windowCenter = windowWidth / 2 // центр окна

function getColor(element) {
  const rect = element.getBoundingClientRect() //  получаем координаты левого верхнего угла элемента относительно окна браузера
  const elementLeft = rect.left // координата левого верхнего угла элемента
  const elementRight = rect.right // координата правого верхнего угла элемента

  if(elementRight < windowCenter) {  // Если элемент целиком слева
    return 'green'
  }

  if(elementLeft > windowCenter) {  // Если элемент целиком справа
    return 'blue'
  }

  return 'red'
}

const elements = document.querySelectorAll('*') // все элементы

elements.forEach(element => { 
  const color = getColor(element) // получаем цвет
  element.style.backgroundColor = color // применяем цвет
})