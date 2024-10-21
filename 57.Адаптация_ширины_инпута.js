/*
Дан инпут. Сделайте так, чтобы при вводе текста, если текст длиннее ширины инпута, ширина инпута увеличивалась так, чтобы текст в него поместился.
*/
const inp = document.querySelector('#inp-57')

inp.addEventListener('input', function() {
  // Получаем текущую ширину инпута
  const currentWidth = this.offsetWidth
  // Получаем ширину текста в инпуте
  const textWidth = this.scrollWidth
  // Если ширина текста больше ширины инпута, то увеличиваем ширину инпута
  if(textWidth > currentWidth) {
    this.style.width = textWidth + 'px'
  }
})