/*
Дана прямоугольная HTML таблица с четным количеством рядов и колонок. По нажатию на кнопку выделите 4 центральных ячейки этой таблицы.
*/
function highlightCenterCell() {
  const table = document.getElementById('myTable2');

  if(!table) {
    console.error('Таблица не найдена на странице!')

    return
  }

  const rows  = table.rows
  const numRows = rows.length
  const numColls = rows[0].cells.length // Предполагаем, что все строки имеют одинаковое количество ячеек

  if(numRows % 2 != 0 || numColls % 2 != 0) {
    console.error('Таблица должна иметь четное количество рядов и колонок!')

    return
  }

  const centerRowsIndex = Math.floor(numRows / 2)
  const centerCollIndex = Math.floor(numColls / 2)
  rows[centerRowsIndex-1].cells[centerCollIndex-2].classList.add('highlighted')
  rows[centerRowsIndex-1].cells[centerCollIndex-1].classList.add('highlighted')
  rows[centerRowsIndex-1].cells[centerCollIndex].classList.add('highlighted')
  rows[centerRowsIndex-1].cells[centerCollIndex+1].classList.add('highlighted')
  rows[centerRowsIndex].cells[centerCollIndex-2].classList.add('highlighted')
  rows[centerRowsIndex].cells[centerCollIndex-1].classList.add('highlighted')
  rows[centerRowsIndex].cells[centerCollIndex].classList.add('highlighted')
  rows[centerRowsIndex].cells[centerCollIndex+1].classList.add('highlighted')
}

const button = document.querySelector('#highlightButton')

button.addEventListener('click', highlightCenterCell)