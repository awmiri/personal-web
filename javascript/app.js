let $ = document
const closeIcon = $.querySelector('.nav__close-icon')
const getUlElem = $.querySelector('.nav__menu-list')
const getDarkBackgrund = $.querySelector('.cover')

closeIcon.addEventListener('click' , function () {
    this.classList.toggle('nav__close-icon--open')
    getUlElem.classList.toggle('nav__menu-list--open')
    getDarkBackgrund.classList.toggle('cover--active')
})