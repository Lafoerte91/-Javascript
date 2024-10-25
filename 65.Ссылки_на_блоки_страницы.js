/*
Дана фиксированная менюшка, ссылающаяся на определенные блоки страницы. Сделайте так, чтобы по мере прокрутки страницы, когда страница прокручена на определенном блоке, в меню выделялась соответствующая ссылка.
*/
const menuLinks = document.querySelectorAll('.menu-link')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY // сколько прокрутили

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50 // Отступ 50px для красивого выделения
    const sectionBottom = sectionTop + section.offsetHeight // Высота секции

    if(scrollY > sectionTop && scrollY < sectionBottom) {
      menuLinks.forEach(link => link.classList.remove('active'))

      menuLinks[index].classList.add('active')
    }
  })
})



