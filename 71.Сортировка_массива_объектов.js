/*
Дан массив объектов.
Выполните сортировку этого массива по заданному полю (по имени, возрасту или зарплате).
*/
let arr = [
{
  name: 'user3',
  age: 31,
  salary: 100,
},
{
  name: 'user1',
  age: 32,
  salary: 300,
},
{
  name: 'user2',
  age: 33,
  salary: 200,
},
];

function sortField(arr, field) {
return arr.sort((a, b) => {
  const type = typeof a[field]; 

  switch (type) {
  case 'string':
    return a[field].localeCompare(b[field]); 
  case 'number':
    return a[field] - b[field]; 
  default:
    return 0; 
  }
});
}

console.log(sortField(arr, 'name')); // Отсортировано корректно
console.log(sortField(arr, 'age'));  // Отсортировано корректно
console.log(sortField(arr, 'salary')); // Отсортировано корректно
