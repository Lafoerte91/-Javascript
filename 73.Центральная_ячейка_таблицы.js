/*
Дана прямоугольная HTML таблица с нечетным количеством рядов и колонок. По нажатию на кнопку выделите центральную ячейку этой таблицы.
*/

function highlightCenterCell() {
  const table = document.getElementById('myTable');

  if(!table) {
    console.error('Таблица не найдена на странице!')

    return
  }

  const rows  = table.rows
  const numRows = rows.length
  const numColls = rows[0].cells.length // Предполагаем, что все строки имеют одинаковое количество ячеек

  if(numRows % 2 == 0 || numColls % 2 == 0) {
    console.error('Таблица должна иметь нечетное количество рядов и колонок!')

    return
  }

  const centerRowsIndex = Math.floor(numRows / 2)
  const centerCollIndex = Math.floor(numColls / 2)
  const centerCell = rows[centerRowsIndex].cells[centerCollIndex]

  centerCell.classList.add('highlighted')
}

const button = document.querySelector('#highlightButton')

button.addEventListener('click', highlightCenterCell)