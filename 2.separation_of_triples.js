/*
Отделение троек цифр в числе
Дано число, например такое:
'12345678'
Отделите пробелом каждую тройку чисел с конца. То есть у нас должно получится:
'12 345 678'
*/

const numberString = '12345678'
const formattedNumberString = Number(numberString).toLocaleString("en-US").replace(/,/g, " ")

console.log(formattedNumberString)