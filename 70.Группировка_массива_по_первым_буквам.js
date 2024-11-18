/*
Дан произвольный массив со словами, начинающимися на различные буквы.
Преобразуйте этот массив в объект, в котором ключами будут первые буквы слов, а значениями массивы слов, начинающихся на эти буквы:
{
  'a': [
    'axx', 'ayy', 'azz',
  ],
  'b': [
    'bxx', 'byy', 'bzz',
  ],
  'c': [
    'cxx', 'cyy', 'czz',
  ],
}
*/
let arr = [
  'axx', 'bxx', 'cxx',
  'ayy', 'byy', 'cyy',
  'azz', 'bzz', 'czz',
];

function groupArr(arr) {
  let obj = {}

  for(let i of arr) {
    let firstLetter = i[0]

    if(!obj[firstLetter]) {
      obj[firstLetter] = [i]
    } else {
      obj[firstLetter].push(i)
    }
  }

  return obj
}

console.log(groupArr(arr))