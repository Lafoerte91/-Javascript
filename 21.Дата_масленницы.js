/*
Определите дату ближайшей масленницы (последнее воскресенье зимы). Если в этом году она уже была - покажите за следующий год.
*/
function getNextMaslenitsa() {
  const today = new Date()
  const currentYear = today.getFullYear()
  const nextYear = currentYear + 1

  // Найти последнее воскресенье февраля (или марта, если февраль 29 дней)
  const lastFebruarySunday = new Date(currentYear, 1, 29) // Начать с 28 февраля
  while(lastFebruarySunday.getDay() !== 0) {
    lastFebruarySunday.setDate(lastFebruarySunday.getDate() + 1)
  }
  // Если Масленица уже прошла в этом году, вернуть дату следующего года
  if(today > lastFebruarySunday) {
    console.log(lastFebruarySunday.getDate())
    return new Date(nextYear, lastFebruarySunday.getMonth(), lastFebruarySunday.getDate())
  } else {
    return lastFebruarySunday
  }
}

const nextMaslenitsaDate = getNextMaslenitsa()

console.log("Дата ближайше масленницы: ", nextMaslenitsaDate.toLocaleString())


