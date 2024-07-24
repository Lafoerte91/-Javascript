/*
С помощью canvas нарисуйте сетку и сделайте так, чтобы по клику на любую ячейку сетки эта ячейка становилась закрашенной. А по клику на закрашенную ячейку она должна становится пустой.
*/
const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d') // Получаем контекст канваса
const gridSize = 20 // Размер ячейки сетки
const gridWidth = 10 // Количество ячеек по горизонтали
const gridHeigth = 10 // Количество ячеек по вертикали
let grid = [] // Массив для отслеживания состояния ячеек

// Создаем сетку
for(let i = 0; i < gridHeigth; i++) {
  grid[i] = []
  for(let j = 0; j < gridWidth; j++) {
    grid[i][j] = false // Изначально все ячейки пустые
  }
}

// Отрисовка сетки
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Очищаем холст
  ctx.strokeStyle  = 'black' // Цвет линий сетки

  // Вертикальные линии
  for(let i = 0; i <= gridHeigth; i++) {
    ctx.beginPath() //  Начинаем новую линию
    ctx.moveTo(i * gridSize, 0) // Начальная точка линии
    ctx.lineTo(i * gridSize, canvas.height) // Конечная точка линии
    ctx.stroke() // Отрисовываем линию
  }

  // Горизонтальные линии
  for(let i = 0; i <= gridHeigth; i++) {
    ctx.beginPath() //  Начинаем новую линию
    ctx.moveTo(0, i * gridSize) // Начальная точка линии
    ctx.lineTo(canvas.width, i * gridSize) // Конечная точка линии
    ctx.stroke() // Отрисовываем линию
  }
}

canvas.addEventListener('click', function(event) {
  const x = Math.floor(event.offsetX / gridSize) // Получаем координату по горизонтали
  const y = Math.floor(event.offsetY / gridSize) // Получаем координату по вертикали

  grid[y][x] = !grid[y][x] // Переключаем состояние

  drawGrid() // Перерисовываем сетку

  if(grid[y][x]) {
    ctx.fillStyle = 'blue' 
  } 
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize) // Отрисовываем закрашенную ячейку
})

drawGrid() // Рисуем сетку при загрузке