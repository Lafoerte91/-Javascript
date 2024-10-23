/*
Дана следующая структура.
Напишите код, которой переделает структуру данных вот в такую:
{
  2019: {
    12: {
      31: 1,
      30: 2,
      29: 3,
    },
    11: {
      28: 4,
      27: 5,
    }
  },
  2018: {
    12: {
      31: 6,
      30: 7,
    },
  }
}
*/
const data = {
  '2019-12-31': 1,
  '2019-12-30': 2,
  '2019-12-29': 3,
  '2019-11-28': 4,
  '2019-11-27': 5,
  '2018-12-31': 6,
  '2018-12-32': 7,
}

function convertDate(dates) {
  dates = Object.entries(dates)
  let res = {}

  for(const date of dates) {
    let [year, month, day] = date[0].split('-')
    let count  = date[1]

    if(!res[year]) {
      res[year] = {
        [month] : {
          [day]: count
        }
      }
    } else if(!res[year][month] ) {
      res[year][month] = {
        [day]: count
      } 
    } else {
      res[year][month][day] = count
    }
  }

  return res
}

console.log(convertDate(data))