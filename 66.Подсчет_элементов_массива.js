/*
Дан массив. Подсчитайте количество различных элементов в нем. В качестве результата верните объект, в котором ключами будут элементы массива, а значениями - их количество в массиве.
*/
let arr = [
  "Hello, world!", // строка
  123, // число
  true, // логическое значение
  { name: "John", age: 30 }, // объект
  [1, 2, 3], // вложенный массив
  function() { console.log("This is a function"); }, // функция
  null, // null
  null, // null
  undefined, // undefined,
  undefined // undefined,
];

function countElementsArr(arr) {
  let result = {}

  arr.forEach(item => {
    if(!result[item]) {
      result[item] = 1
    } else {
      result[item]++
    }
  })

  return result
}

console.log(countElementsArr(arr))


regions.forEach(item => {
  console.log(item)
})
