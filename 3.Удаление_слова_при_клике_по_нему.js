/* Дан див с текстом:
<div>
  word1 word2 word3 word4 word5 word6 word7
</div> */
let div = document.querySelector('div')
// преобразуем содержимое div в массив
let arr = div.innerText.split(' ')
div.innerHTML = ''

for (let i = 0; i < arr.length; i++) {
  let span = document.createElement('span')
  // заполняем span содержимым массива
  span.textContent = arr[i]
  // немного стилей, т.к. будет слипшая каша
  span.style.marginRight = '5px'
  // созданные спаны добавляем в div
  div.append(span)
  // навешиваем на каждый спан обработчик клика
  span.addEventListener('click', function() {
    span.parentNode.removeChild(this)
  })
}
