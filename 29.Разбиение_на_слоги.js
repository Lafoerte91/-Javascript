/*
Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.
*/
function splitIntoSyllables(word) {
  // Удаляем пробелы и знаки препинания
  word = word.replace(/[\s.,;!?]/g, '');

  // Регулярное выражение для определения гласных и согласных
  const vowelRegex = /[aeiouy]/i; 

  let syllables = [];
  let currentSyllable = '';

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // Если буква - гласная, добавляем ее в текущий слог
    if (vowelRegex.test(letter)) {
      currentSyllable += letter;
    } else {
      // Если буква - согласная
      if (currentSyllable.length > 0) {
        // Добавляем текущий слог в массив
        syllables.push(currentSyllable);
        currentSyllable = '';
      }
      currentSyllable += letter;
    }

    // Если это последняя буква слова, добавляем последний слог
    if (i === word.length - 1) {
      syllables.push(currentSyllable);
    }
  }

  return syllables;
}

// Пример использования
const word = 'hello';
const syllables = splitIntoSyllables(word);
console.log(syllables); 
