/*
Дана строка '12345678'. Сделайте из нее '21436587'. Строка, конечно же, может быть любой.
*/

let string = '12345678'
let res = ''
let previous
for(let i = 1; i < string.length; i += 2) {
  previous = string[i - 1] 
  res += string[i] + previous
}

console.log(res)