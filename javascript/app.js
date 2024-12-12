let $ = document
const closeIcon = $.querySelector('.nav__close-icon')
const getUlElem = $.querySelector('.nav__menu-list')
const getDarkBackgrund = $.querySelector('.cover')
const getListItems = $.querySelectorAll('.resume_title--item')


closeIcon.addEventListener('click' , function () {
    this.classList.toggle('nav__close-icon--open')
    getUlElem.classList.toggle('nav__menu-list--open')
    getDarkBackgrund.classList.toggle('cover--active')
})

getListItems.forEach(function (getListItem){
    getListItem.addEventListener('click' , function() {
        $.querySelector('.resume_title--item_active').classList.remove('resume_title--item_active')
        this.classList.add('resume_title--item_active')
        $.querySelector('.resume__content--item_show').classList.remove('resume__content--item_show')
        let checkClass = this.getAttribute('content-id')
        $.querySelector(checkClass).classList.add("resume__content--item_show")
    })
})