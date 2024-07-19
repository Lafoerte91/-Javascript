/*
На странице есть чекбоксы, отмеченные и нет. Сделайте так, чтобы по нажатию на кнопку случайный чекбокс сменил свое состояние (с отмеченного на неотмеченное и наоборот).
*/
const button = document.querySelector('button')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

button.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() *  checkboxes.length)
  const randomCheckbox = checkboxes[randomIndex]

  randomCheckbox.checked = !randomCheckbox.checked // Смена состояния
})