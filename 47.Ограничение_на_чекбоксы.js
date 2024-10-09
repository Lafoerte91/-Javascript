/*
На странице есть чекбоксы, изначально неотмеченные. Сделайте так, чтобы только 3 чекбокса из них могли быть отмеченными. При попытке отметить 4-тый чекбокс ничего не должно происходить.
*/
let count = 0;
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      if (count < 3) {
        count++;
      } else {
        checkbox.checked = false; // Снимаем отметку, если уже 3 отмечены
      }
    } else {
      count--;
    }
  });
});
