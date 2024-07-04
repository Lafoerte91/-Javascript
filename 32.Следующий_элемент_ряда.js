/*
Дан ряд: a, b, c, d ... x, y, z, aa, ab, ac, ... ay, az, ba, bb, ... bz, ... aaz.. Напишите функцию, которая получит следующий элемент по предыдущему.
*/

function getNextElem(elem, endOfElem = '')  {
  let letters = 'abcdefghijklmnopqrstuvwxyz';

  let index = letters.indexOf(elem[elem.length - 1]); // получаем индекс последней буквы
  if (elem === '') { 
      return `a${endOfElem}` // возвращаем первую букву
  } else if (elem[elem.length - 1] !== 'z') { // если не последняя буква
      return `${elem.slice(0, elem.length - 1)}${letters[index + 1]}${endOfElem}`; // возвращаем следующую букву
  } else {
      return getNextElem(elem.slice(0, elem.length - 1), `${endOfElem}a`); // если последняя буква
  }
}

console.log(getNextElem('zz')); // aaa
console.log(getNextElem('ab')); // ac
console.log(getNextElem('bzz')); // caa
