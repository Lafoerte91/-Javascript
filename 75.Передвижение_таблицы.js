/*
Дана квадратная HTML таблица произвольного размера:
01  02  03  04
05  06  07  08
09  10  11  12
13  14  15  16

По клику на кнопку передвиньте ячейки таблицы по кругу:
16  01  02  03
04  05  06  07
08  09  10  11
12  13  14  15
*/
function moveTable() {
  const table = document.getElementById('myTable2');
  const tds = table.querySelectorAll('td')
  const trs = table.querySelectorAll('tr')
  let last = tds[tds.length-1] // последняя ячейка

  trs.forEach(row => {
    let lastCell = row.lastElementChild // последняя ячейка в строке

    row.insertBefore(last, row.firstElementChild) // вставляем в строку первую ячейку

    last = lastCell // перемещаем указатель на последнюю ячейку
    console.log(last)
  })
}

const moveButton = document.getElementById('moveButton');

moveButton.addEventListener('click', moveTable);
