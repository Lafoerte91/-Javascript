/*
Дана HTML таблица произвольного размера. Дан массив из достаточного количества цветов, например, из 7. Сделайте так, чтобы все ячейки окрасились в случайный цвет из массива, но так, чтобы у каждой ячейки соседи по вертикали и горизонтали не были одного с ней цвета (по диагонали можно).
*/
const colorTable = document.getElementById('interactiveTable');
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan']; // массив из цветов

// Функция для получения случайного индекса для цвета, исключая переданный индекс
function getRandomColorIndex(excludeIndex) {
  let randomIndex = Math.floor(Math.random() * colors.length);
  
  // Генерируем новый случайный индекс, пока он не будет отличаться от excludeIndex
  while (randomIndex === excludeIndex) {
    randomIndex = Math.floor(Math.random() * colors.length);
  }
  
  return randomIndex;
}

// Проходим по каждой строке таблицы
for (let i = 0; i < colorTable.rows.length; i++) {
  // Проходим по каждой ячейке в строке
  for (let j = 0; j < colorTable.rows[i].cells.length; j++) {
    let currentCell = colorTable.rows[i].cells[j];
    
    // Получаем случайный индекс цвета, исключая цветы соседних ячеек
    let randomIndex = getRandomColorIndex(getColorIndex(i - 1, j)) // проверяем верхнюю ячейку
    randomIndex = getRandomColorIndex(getColorIndex(i, j - 1)) // проверяем левую ячейку
  
    // Устанавливаем цвет ячейки
    currentCell.style.backgroundColor = colors[randomIndex];
  }
}

// Функция для получения индекса цвета ячейки по строке и столбцу
function getColorIndex(row, col) {
  if (row >= 0 && row < colorTable.rows.length && col >= 0 && col < colorTable.rows[row].cells.length) {
    let colorString = colorTable.rows[row].cells[col].style.backgroundColor;
    return colors.indexOf(colorString);
  } else {
    // Если ячейка находится за пределами таблицы, возвращаем -1
    return -1;
  }
}
