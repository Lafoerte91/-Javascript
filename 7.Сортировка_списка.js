/*
Дан список ul, например, вот такой:
<ul>
  <li>5</li>
  <li>2</li>
  <li>7</li>
  <li>9</li>
  <li>1</li>
  <li>3</li>
  <li>8</li>
  <li>4</li>
  <li>6</li>
</ul>
<button>sort</button>
Сделайте так, чтобы по нажатию на кнопку выполнилась сортировка пунктов списка по возрастанию значений тегов li.
*/ 
const list = document.querySelector('.list')
const sortButton = document.querySelector('.sort-btn')

sortButton.addEventListener('click', function() {
  const items = Array.from(list.querySelectorAll('li')) // превращаем псевдомассив в настоящий, чтобы отсортировать
  items.sort((a, b) => +a.textContent - +b.textContent)
  items.forEach(item => { // используем стрелочную функцию, иначе сортировка не сработает
    list.appendChild(item)
  })
})

