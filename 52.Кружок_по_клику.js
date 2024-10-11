/*
По клику на экран в месте клика должен появляться кружок с центром в месте клика и радиусом 10px (при каждом клике новый кружок). Если кликнуть на такой кружок - он должен удалиться.
*/
document.body.addEventListener('click', function(event) {
  // Создаем новый элемент кружка
  const circle = document.createElement('div');
  circle.classList.add('circle');
  // Устанавливаем позицию кружка в месте клика
  circle.style.left = `${event.clientX - 10}px`; // Центрируем кружок
  circle.style.top = `${event.clientY - 10}px`;
  // Добавляем кружок на страницу
  document.body.appendChild(circle);
 
  // Добавляем обработчик клика на только что созданный круг
  circle.addEventListener('click', function() {
   this.remove();
  });
 });
 