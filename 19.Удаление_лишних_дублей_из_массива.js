/*
Дан массив с элементами, например, вот такой:
[1, 2, 1, 3, 1, 1, 5, 1, 2, 4]
Удалите из массива второй и последующие дубли. В нашем случае мы должны удалить все единицы, кроме первой и второй. А вот двойки мы удалять не должны, так как у нее есть только один дубль. В результате у нас должен получится следующий массив:
[1, 2, 1, 3, 5, 2, 4]
*/
const arr = [1, 2, 1, 3, 1, 1, 5, 1, 2, 4]
const result = []
const duplicates = {}

for(let i = 0; i < arr.length; i++) {
  if(!duplicates[arr[i]]) {
    duplicates[arr[i]] = 1
  } else {
    duplicates[arr[i]]++
  }
  if(duplicates[arr[i]] == 1 || duplicates[arr[i]] == 2) {
    result.push(arr[i])
  }
}

console.log(result)

