/*
Дан список ul, например, вот такой:
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
</ul>
Сделайте кнопку, по нажатию на которую порядок пунктов списка поменяется на обратный. Физически, не через CSS.
*/

const btn = document.querySelector('.btn-20')
const list = Array.from(document.querySelectorAll('.twenty-task li'))
console.log(list)

btn.addEventListener('click', function() {
  list.reverse()
  list.forEach(item => {
    document.querySelector('.twenty-task').appendChild(item)
  })
})