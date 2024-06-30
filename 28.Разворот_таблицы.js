/*
Дана некоторая HTML таблица. Сделайте так, чтобы были видны первые N строк этой таблицы. А остальная таблица будет раскрываться по клику на нее.
*/

const table = document.getElementById('interactiveTable')

function showFirstRows(n) {
  const rows = table.rows
  for(let row in rows) {
    if(row > n -1) {
      rows[row].style.display = 'none'
    }
  }
}

showFirstRows(3)

table.addEventListener('click', function() {
  const rows = table.rows
  for(let row in rows) {
    rows[row].style.display = 'block'
  }
})