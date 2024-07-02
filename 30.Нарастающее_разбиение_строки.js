/*
Дана строка с любыми символами. Для примера пусть будет такая:
'1234567890'
Нужно разбить строку в массив таким образом:
['1', '23', '456', '7890']
И так далее, пока символы в строке не закончатся.
*/

let string = '1234567890'
let count = 1
let arr = []
while(string.length > 0) {
  arr.push(string.slice(0, count))
  string = string.slice(count)
  count++
}

console.log(arr)