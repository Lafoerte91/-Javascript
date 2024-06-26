/*
Дан массив без дублей. Получите из него массив из N случайных элементов, но так, чтобы элементы не повторялись.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = []

for(let i = 0; i < arr.length; i++) {
  const random = Math.floor(Math.random( ) *  arr.length) // получаем случайное число
  result.push(arr[random]) // добавляем его в результирующий массив
  arr.splice(random, 1) // удаляем элемент из исходного массива
}

console.log(result)