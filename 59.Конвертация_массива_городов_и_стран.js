/*
Дан список городов и их стран, хранящийся в следующей структуре.
Напишите код, которой переделает структуру данных вот в такую:
{
  'country1': [
    'city11', 'city12', 'city13',
  ],
  'country2': [
    'city21', 'city22'
  ],
  'country3': [
    'city31', 'city32'
  ],
}
*/
let data = [
  {
    country: 'country1',
    city:    'city11',
  },
  {
    country: 'country2',
    city:    'city21',
  },
  {
    country: 'country3',
    city:    'city31',
  },
  {
    country: 'country1',
    city:    'city12',
  },
  {
    country: 'country1',
    city:    'city13',
  },
  {
    country: 'country2',
    city:    'city22',
  },
  {
    country: 'country3',
    city:    'city31',
  },
]

function newData(data) {
  let res = {}

  data.forEach(item => {
    if(!res[item.country]) {
      res[item.country] = [item.city]
    } else {
      res[item.country].push(item.city)
    }
  })

  return res
}

console.log(newData(data))