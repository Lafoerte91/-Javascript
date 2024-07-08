/*
Дан элемент. По клику на него выведите координаты его четырех углов относительно окна браузера.
*/

const element = document.querySelector('.block')

element.addEventListener('click', function() {
  const rect  = this.getBoundingClientRect() // // Получаем координаты левого верхнего угла элемента относительно окна браузера

  // Вычисляем координаты остальных углов
  const topLeft = {
    x: rect.left,
    y: rect.top
  }

  const topRight = {
    x: rect.right,
    y: rect.top
  }

  const bottomLeft = {
    x: rect.left,
    y: rect.bottom
  }

  const bottomRight = {
    x: rect.right,
    y: rect.bottom
  }

  // Выводим координаты в консоль
  console.log('Точка 1 (верхний левый):', topLeft);
  console.log('Точка 2 (верхний правый):', topRight);
  console.log('Точка 3 (нижний левый):', bottomLeft);
  console.log('Точка 4 (нижний правый):', bottomRight);
})



