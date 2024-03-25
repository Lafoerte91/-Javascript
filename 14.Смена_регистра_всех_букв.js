/*
Дан текст. Поменяйте в нем регистр всех букв на противоположный.
*/
let text = 'Мы любим животных и СТАРАЕМСЯ поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.'

function invertText(text) {
  return text.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
}

console.log(invertText(text))