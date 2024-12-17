let $ = document
const closeIcon = $.querySelector('.nav__close-icon')
const getUlElem = $.querySelector('.nav__menu-list')
const getDarkBackgrund = $.querySelector('.cover')
const getListItems = $.querySelectorAll('.resume_title--item')
const getListPortofilo = $.querySelectorAll('.portofilo_item')
const getnNavList = $.querySelectorAll('.nav__menu-item')
const sections = $.querySelectorAll('main > section')


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
getListPortofilo.forEach(function(portofilo){
    portofilo.addEventListener('click' , function () {
       $.querySelector(".portofilo_item--active").classList.remove("portofilo_item--active")
       this.classList.add('portofilo_item--active')
        $.querySelector('.potofolio__content--shows').classList.remove('potofolio__content--shows')
        let getId = this.getAttribute('content-id')
        $.querySelector(getId).classList.add('potofolio__content--shows')
    })
})
getnNavList.forEach(function (list) {
    list.addEventListener('click' , function (event) {
        event.preventDefault() 
        $.querySelector('.nav__menu__item--active').classList.remove('nav__menu__item--active')
        this.classList.add('nav__menu__item--active')
        let getCustomAttribute = list.getAttribute('data-id-header')
        let heightTop = $.querySelector(`.${getCustomAttribute}`).offsetTop
        
       window.scrollTo({
        top :heightTop -100 ,
        behavior:'smooth'
 })
    })
})

let observer = new IntersectionObserver(observerHancler , {
    threshold : 0.4
})

function observerHancler(allSection) {
    allSection.map(function (section) {
        let getClass = section.target.className
        if ( section.isIntersecting) {
            $.querySelector(`.nav__menu-item[data-id-header=${getClass}]`).classList.add('nav__menu__item--active')
        }else{
            $.querySelector(`.nav__menu-item[data-id-header=${getClass}]`).classList.remove('nav__menu__item--active')
        } 

    })
}

sections.forEach(function (section) {
    observer.observe(section)
})