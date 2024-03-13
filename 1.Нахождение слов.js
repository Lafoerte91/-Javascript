/*
Дана строка со словами. Не используя массивы, циклы и регулярные выражения выведите на экран: первое слово, второе слово, последнее слово.
*/
let string = "Here first second and third word"
// находим индексы пробелов строк (именно пробелы разделяют слова на 1,2 и т.д.)
let firstIndex = string.indexOf(' ')
let secondIndex =  string.indexOf(' ', firstIndex + 1) // Ищем начиная со следующого символв
let lastIndex = string.lastIndexOf(' ') // Ищем с конца
// с помощью метода slice() "вырезаем" слова из строки
let firstWord = string.slice(0, firstIndex)
let secondWord = string.slice(firstIndex+1, secondIndex)
let lastWord = string.slice(lastIndex+1)

console.log(`
Первое слово: ${firstWord}
Второе слово: ${secondWord}
Третье слово: ${lastWord}
`)
