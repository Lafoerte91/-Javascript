/*
Дан список событий за определенные даты, хранящийся в следующей структуре.
Напишите код, которой переделает структуру данных вот в такую:
[
  {
    date:  '2019-12-29'
    event: 'name1'
  },
  {
    date:  '2019-12-31'
    event: 'name2'
  },
  {
    date:  '2019-12-29'
    event: 'name3'
  },
  {
    date:  '2019-12-30'
    event: 'name4'
  },
  {
    date:  '2019-12-29'
    event: 'name5'
  },
  {
    date:  '2019-12-31'
    event: 'name6'
  },
  {
    date:  '2019-12-29'
    event: 'name7'
  },
  {
    date:  '2019-12-30'
    event: 'name8'
  },
  {
    date:  '2019-12-30'
    event: 'name9'
  },
]
*/
const data = {
  '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
  '2019-12-30': ['name4', 'name8', 'name9'],
  '2019-12-31': ['name2', 'name6'],
}

function unfoldingArr(data) {
  let result = []

  for(const date of Object.keys(data)) {
    for(let j = 0; j < data[date].length; j++) {
      result.push({
        'date': date,
        'event': data[date][j]
      })
    }
  }

  return result
}

console.log(unfoldingArr(data))