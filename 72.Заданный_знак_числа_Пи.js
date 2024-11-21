/*
Сделайте функцию, которая будет возвращать заданный знак числа Пи (например, тысячный знак).
*/
function getPiDigitSimple(index) {
  const piString = Math.PI.toString();

  if(index >= piString.length) {
    return null  // Индекс вне диапазона
  }
  // Находим позицию точки и удаляем её, чтобы избежать проблем с индексацией
  const pointIndex = piString.indexOf('.')
  const piWithoutPoint = pointIndex == -1 ? piString : piString.slice(0, pointIndex) + piString.slice(pointIndex + 1)

  return parseInt(piWithoutPoint[index])
}

console.log(getPiDigitSimple(0))
console.log(getPiDigitSimple(1))
console.log(getPiDigitSimple(10))