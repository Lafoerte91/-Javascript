/*
Сделайте так, чтобы при клике на любое место окна браузера в месте клика появлялся порядковый номер этого клика.
*/

let body = document.querySelector('html');
let counter = 0;
let div;

body.addEventListener('click', function(evt) {
  console.log(evt.clientX, evt.clientY);
  counter++;
  div = document.createElement('div');
  div.textContent = counter;
  div.style.position = 'absolute';
  div.style.left = evt.clientX + 'px';
  div.style.top = evt.clientY + 'px';
  div.style.fontSize = '16px';
  div.style.color = 'blue';
  body.append(div);
});
