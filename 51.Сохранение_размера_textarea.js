/*
Дан текстареа. Как известно, его размер можно менять, потянув за уголок. Сделайте так, чтобы можно было изменить размер этого текстареа, а затем обновить страницу - и изменения не должны пропасть.
*/
// Функция для загрузки размеров из localStorage
function localTextareaSize() {
  const width = localStorage.getItem('textareaWidth')
  const height = localStorage.getItem('textareaHeight')
  const textarea = document.querySelector('#myTextarea')

  if(width) {
    textarea.style.width = width
  }

  if(height) {
    textarea.style.height = height
  }
}
// Функция для сохранения размеров в localStorage
function saveTextareaSize() {
  const textarea = document.querySelector('#myTextarea')
  localStorage.setItem('textareaWidth', textarea.style.width)
  localStorage.setItem('textareaHeight', textarea.style.height)
}
// Загрузка размеров при загрузке страницы
window.onload = localTextareaSize
// Сохранение размеров при изменении размера
document.querySelector('#myTextarea').addEventListener('mouseup', saveTextareaSize)
document.querySelector('#myTextarea').addEventListener('toucheend', saveTextareaSize) // Для мобильных устройств