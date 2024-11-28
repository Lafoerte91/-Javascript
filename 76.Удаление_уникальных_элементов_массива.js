/*
Дан массив. Удалите из него все элементы, которые встречаются только один раз.
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
let obj = {}

for(let item of arr) {
  if(!obj[item]) {
    obj[item] = 1
  } else {
    obj[item]++
  }
}

arr = arr.filter(item => obj[item] > 1)

console.log(arr)