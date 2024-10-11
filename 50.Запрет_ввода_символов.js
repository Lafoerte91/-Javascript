/*
Запретите водить некоторые символы в инпут. Любые другие символы должны вводится, а эти просто не будут появляться, сколько бы мы ни жали на них.
*/
const input = document.querySelector('#myInput')
const forbiddenChars = ['@', '#', '$', '%'] // Символы, которые нужно запретить

input.addEventListener('input', function(event) {
  let value = this.value
  // Удаляем запрещенные символы
  forbiddenChars.forEach(char => {
    value = value.replace(char, '')
  })
  this.value = value
})