/*
Даны инпуты. Поставьте первому инпуту в value число 1, через секунду второму число 2, еще через секунду третьему число 3 и так далее пока инпуты не закончатся. Когда инпуты закончатся продолжите нумерацию с первого инпута.
*/
const inputs = document.querySelectorAll('input') 
let num = 1
let iputsNum = 0
let id = setInterval(() => {
  iputsNum < inputs.length ? inputs[iputsNum++].value = num++ : iputsNum = 0 // если инпуты закончились, то начинаем сначала
}, 1000)
