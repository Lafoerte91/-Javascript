/*
Дана таблица с числами. По нажатию на кнопку найдите ячейку, в которой хранится максимальное число, и сделайте ее фон красным.
*/
const btn = document.querySelector('#findMaxButton')
const table = document.querySelector('table')
let maxNumber = 0
let maxCell = null

btn.addEventListener('click', function() {
  // Ищем максимальное число и его ячейку
  for(const row of table.rows) {
    for(const cell of row.cells) {
      const cellValue = Number(cell.textContent) // Преобразуем текст ячейки в число
      if(cellValue > maxNumber) {
        maxNumber = cellValue
        maxCell = cell
      }
    }
  }

  // Делаем фон ячейки красным
  if(maxCell) {
    maxCell.style.backgroundColor = 'red'
  }
})