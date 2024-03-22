/*
Дан некоторый DOM элемент. Поменяйте этот элемент местами с его соседом снизу. Считаем, что сосед снизу точно есть.
*/

let neighbour1 = document.querySelector('.neighbour1')
let neighbour2 = neighbour1.nextElementSibling

neighbour1.parentNode.insertBefore(neighbour2, neighbour1)