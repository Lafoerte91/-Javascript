/*
Даны множество блоков с абсолютным позиционированием. По клику на блок сделайте так, чтобы он стал поверх других блоков.
*/
let blocks = document.querySelectorAll('.block')

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('block')) {
    for(let block of blocks) {
      block.classList.remove('top')
    }
    event.target.classList.add('top')
  }
})

