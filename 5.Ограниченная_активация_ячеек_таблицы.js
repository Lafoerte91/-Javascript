/*
Дана таблица произвольного размера. Пусть по нажатию на ячейку таблицы эта ячейка как-то активируется, например, красится красным фоном. Сделайте так, чтобы, если активировано 5 ячеек подряд по горизонтали или по вертикали, больше никаких ячеек активировать было нельзя
*/
const table = document.getElementById('interactiveTable')
let activatedCells = 0

function handleClick(event) {
  // Проверяем, что кликнули по ячейке и она не активирована
  if(event.target.tagName == 'TD' && !event.target.classList.contains('active')) {
    const clickedCell = event.target
    // определяем индекс строки таблицы, в которой находится активированная ячейка
    const rowIndex = clickedCell.parentElement.rowIndex
    // определяем индекс активированной ячейки в текущей строке таблицы
    const cellIndex = clickedCell.cellIndex
    let consecutiveActivated = true
    // Проверяем горизонтальную последовательность
    for (let i = 0; i < 5; i++) {
      if(!table.rows[rowIndex].cells[i].classList.contains('active')) {
        consecutiveActivated = false;
        break;
      }
    }
    // Если в строке все ячейки активированы, удаляем обработчик
    if(consecutiveActivated) {
      table.removeEventListener('click', handleClick)
      return
    }
    consecutiveActivated = true
    // Проверяем вертикальную последовательность
    for (let i = 0; i < 5; i++) {
      if(!table.rows[i].cells[cellIndex].classList.contains('active')) {
        consecutiveActivated = false;
        break
      }
    }
    // Если в столбце все ячейки активированы, удаляем обработчик
    if(consecutiveActivated) {
      table.removeEventListener('click', handleClick)
      return
    }
    clickedCell.classList.add('active')
  }
}

table.addEventListener('click', handleClick)

