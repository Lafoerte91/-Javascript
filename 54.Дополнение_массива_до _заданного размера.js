/*
Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера. Пример работы такой функции:
let res = func([1, 2, 3], 6, 0); // дополним нулями до размера 6
console.log(res); // выведет [1, 2, 3, 0, 0, 0]
*/
function func(arr, size, elem) {
  while(arr.length < size) {
    arr.push(elem)
  }

  return arr
}

let res = func([1, 2, 3], 6, 0)

console.log(res)
