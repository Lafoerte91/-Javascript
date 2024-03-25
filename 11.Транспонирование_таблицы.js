/*
Транспонирование таблицы
Дана квадратная HTML таблица произвольного размера. По нажатию на кнопку транспонируйте ее. Поясню, что это значит: операция транспонирования заваливает таблицу на бок. Посмотрим на примере. Пусть у нас есть вот такая таблица:
01  02  03  04
05  06  07  08
09  10  11  12
13  14  15  16
После транспонирования она должна превратится в следующую:
01  05  09  13
02  06  10  14
03  07  11  15
04  08  12  16
*/
function transposeTable() {
  const table = document.getElementById('originalTable');
  const rows = table.rows;
  const cols = rows[0].cells.length;
  
  var newTable = document.createElement('table');
  
  for (var i = 0; i < cols; i++) {
    var newRow = newTable.insertRow(); // создаем строку в новой таблице
    for (var j = 0; j < rows.length; j++) {
      var newCell = newRow.insertCell(); // создаем ячейку в строке новой таблтицы
      newCell.textContent = rows[j].cells[i].textContent;
    }
  }
  
  table.replaceWith(newTable); // заменяем старую таблицу новой
}

