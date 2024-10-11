/*
Напишите скрипт, который генерирует случайную строку заданного размера. В строке обязательно должны быть маленькие и большие латинские буквы, цифры и подчеркивание.
*/
function generateString(length)  {
  let result = ''
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '0123456789'
  let symbols  = '_'

  for(let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length)) + symbols + numbers.charAt(Math.floor(Math.random() * numbers.length)) 
  }

  if(result.length == length) {
    return result
  } else {
    return result.substring(0, length)
  }
} 

console.log(generateString(15))