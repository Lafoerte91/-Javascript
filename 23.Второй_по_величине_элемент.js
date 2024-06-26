/*
Дан массив. Найдите второй по величине элемент, после максимального.
Например, в следующем массиве это будет 4:
[1, 2, 3, 4, 5, 5]
*/

const arr = [1, 2, 3, 4, 5, 5]
const max = Math.max(...arr)
const res = arr.filter(item => item != max)

console.log(Math.max(...res))