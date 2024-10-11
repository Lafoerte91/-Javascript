/*
Пусть даны чекбоксы, отмеченные и нет. По нажатию на кнопку сделайте так, чтобы все чекбоксы сменили свое состояние.
*/
function changeOfStateCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  const button = document.querySelector('button')

  button.addEventListener('click', function() {
    checkboxes.forEach(checkbox => {
      checkbox.checked = !checkbox.checked
    })
  })
}

changeOfStateCheckboxes()