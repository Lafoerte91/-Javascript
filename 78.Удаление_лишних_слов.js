/*
Дан текст. Найдите все места с двумя одинаковыми словами подряд и удалите лишние слова.
*/
let text = 'Это тест тест текста. Слово слово повторяется два два раза.'

function deleteDoubleWords(text) {
  let arr = text.split(' ')
  let result = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i+1]) {
      result.push(arr[i])
      }
    } 
    return result.join(' ')
  }




console.log(deleteDoubleWords(text))
