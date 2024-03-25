/*
Дана ссылка. Если ее href начинается на http:// или https:// и после стоит не наш домен, добавьте ссылке атрибут target="_blank".
*/
const myDomen = 'learn.javascript.ru'
const link = document.querySelector('.link')

if(link.href.startsWith('http://') || link.href.startsWith('https://') && !link.href.includes(myDomen)) {
  link.setAttribute('target', '_blank')
}