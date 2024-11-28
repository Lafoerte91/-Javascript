/*
Сделайте функцию, которая будет принимать цвет в hex формате и делать его более темного оттенка.
*/
const darkenColor = (color, amount) => {
  const hex = color.replace('#', '') // убираем #
  let red = parseInt(hex.substring(0, 2), 16) // получаем шеснадцатеричное число
  let green = parseInt(hex.substring(2, 4), 16) 
  let blue = parseInt(hex.substring(4, 6), 16) 
  red = Math.max(0, red - amount) // уменьшаем на amount
  green = Math.max(0, green - amount) 
  blue = Math.max(0, blue - amount) 
  const darkened = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0')// преобразуем в hex

  return darkened.replace('.', '').toUpperCase()
}

console.log(darkenColor('#FF0000', 10))