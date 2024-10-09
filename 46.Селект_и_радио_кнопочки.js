/*
Дан селект и радио кнопочки, количество радио равно количеству пунктов в селекте. Сделайте так, чтобы при выборе пункта в селекте автоматически становилась отмеченной соответствующая радио кнопочка.
*/
const select = document.querySelector('#mySelect')
const radios = document.querySelectorAll('input[type="radio"]')

select.addEventListener('change', () => {
  radios.forEach(radio => {
    if(radio.value == select.value) {
      radio.checked = true
    }
  })
})

