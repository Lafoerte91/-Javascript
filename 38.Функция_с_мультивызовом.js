/*
Напишите функцию, которая будет возвращать сумму любого количества чисел. Работать функция должна вот так:
let res = getSum(2)(5)(6)(7)(2)(3)(4);
console.log(res);
*/
function getSum(num) {
  let total = num

  function innerSum(nextNum) {
    if(typeof nextNum == 'number') {
      total += nextNum
      return innerSum // возвращаем саму себя для цепочки вызовов
    } else {
      return total 
    }
  }
  return innerSum //
}

let res = getSum(2)(5)(6)(7)(2)(3)(4)();
console.log(res);