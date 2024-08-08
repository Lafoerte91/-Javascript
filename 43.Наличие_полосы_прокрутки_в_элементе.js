/*
Дан элемент. Узнайте, есть ли в нем полоса прокрутки в данный момент или нет.
*/
function hasScrollBar(element) {
  const elementHeight = element.clientHeight // Получаем высоту элемента в пикселях
  const contentHeight = element.scrollHeight // // Получаем высоту содержимого элемента в пикселях

  return contentHeight > elementHeight // Если высота содержимого больше высоты элемента, значит, есть полоса прокрутки
}