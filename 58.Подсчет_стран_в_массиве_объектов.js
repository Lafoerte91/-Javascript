/*
Даны города и их страны следующей структуре:
Подсчитайте количество стран. В качестве результата получите объект, в котором ключами будут страны, а значениями - их количество.
*/
let data = [
  {
    country: 'Россия',
    city:    'Москва',
  },
  {
    country: 'Беларусь',
    city:    'Минск',
  },
  {
    country: 'Россия',
    city:    'Питер',
  },
  {
    country: 'Россия',
    city:    'Владивосток',
  },
  {
    country: 'Украина',
    city:    'Львов',
  },
  {
    country: 'Беларусь',
    city:    'Могилев',
  },
  {
    country: 'Украина',
    city:    'Киев',
  },
];

function countCountries(countries) {
  let res = {}

  countries.forEach(item => {
    if(!res[item.country]) {
      res[item.country] = 1
    } else {
      res[item.country]++
    }
  })

  return res
}

console.log(countCountries(data))