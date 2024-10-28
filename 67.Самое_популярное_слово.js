/*
Дан текст. Найдите самое часто встречающееся слово в этом тексте.
*/
const text = 'dog lazy fox jumps over the sleeping dog'

function favoriteWords(text) {
  let res = {}

  text.split(' ').forEach(word => {
    if(!res[word]) {
      res[word] = 1
    } else {
      res[word]++
    }
  })

  return Object.entries(res).sort((a, b) => b[1] - a[1])[0][0]
}

console.log(favoriteWords(text))