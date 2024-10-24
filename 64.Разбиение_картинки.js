/*
Дана картинка. Разбейте ее на N прямоугольников и перемешайте эти прямоугольники в случайном порядке.
*/
function SplitAndShuffleImage(image, N) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') // Получаем контекст канваса
  canvas.width = image.width
  canvas.height = image.height

  ctx.drawImage(image, 0, 0) // Копируем картинку в холст

  const pieces = []
  const pieceWidth = image.width / N
  const pieceHeight = image.height / N
  // Разбить изображение на прямоугольники
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      pieces.push({
        x: i * pieceWidth, 
        y: j * pieceHeight, 
        width: pieceWidth,
        height: pieceHeight
      })
    }
  }
  // Перемешать прямоугольники
  pieces.sort(() => Math.random() - 0.5) // сортируем массив в случайном порядке
  // Очистить холст
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // Нарисовать перемешанные прямоугольники
  pieces.forEach(piece => {
    ctx.drawImage(canvas, piece.x, piece.y,  piece.width, piece.height, piece.x, piece.y,  piece.width, piece.height) // Нарисовать прямоугольник
  })

  return canvas
}

const image = new Image() // Создаем изображение
image.src = './brainhub_.jpg' // Загружаем изображение

image.onload = () => {
  const shuffledCanvas = SplitAndShuffleImage(image, 5) // Разбить на 5 прямоугольников

  document.body.appendChild(shuffledCanvas)
}

