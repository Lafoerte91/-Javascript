/* Дано число. Разложите его на простые множители. Например, разложим число 120. Результатом будет: 2 * 2 * 2 * 3 * 5. */
function primeFactors(n) {
  const factors = []
  let divisor = 2
  while(n >= 2) {
    if(n % divisor == 0) {
      factors.push(divisor)
      n = n / divisor
    } else {
      divisor++
    }
  }
  return factors.join(' * ')
}

console.log(primeFactors(120)) // Выводим разложение числа на простые множители