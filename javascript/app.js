// difind the document 

let $ = document

// select html elament 

const closeIcon = $.querySelector('.nav__close-icon')
const getUlElem = $.querySelector('.nav__menu-list')
const getDarkBackgrund = $.querySelector('.cover')
const getListItems = $.querySelectorAll('.resume_title--item')
const getListPortofilo = $.querySelectorAll('.portofilo_item')
const getnNavList = $.querySelectorAll('.nav__menu-item')
const sections = $.querySelectorAll('main > section')
const darkModeBtn = $.querySelector('.dark_mode__btn')
const moonIcon = '<svg viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>'
const sunIcon = '<svg viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>'

// berger btn 

closeIcon.addEventListener('click' , function () {
    this.classList.toggle('nav__close-icon--open')
    getUlElem.classList.toggle('nav__menu-list--open')
    getDarkBackgrund.classList.toggle('cover--active')
})

// resome chang item event

getListItems.forEach(function (getListItem){
    getListItem.addEventListener('click' , function() {
        $.querySelector('.resume_title--item_active').classList.remove('resume_title--item_active')
        this.classList.add('resume_title--item_active')
        $.querySelector('.resume__content--item_show').classList.remove('resume__content--item_show')
        let checkClass = this.getAttribute('content-id')
        $.querySelector(checkClass).classList.add("resume__content--item_show")
    })
})

// portofilo chang item event

getListPortofilo.forEach(function(portofilo){
    portofilo.addEventListener('click' , function () {
       $.querySelector(".portofilo_item--active").classList.remove("portofilo_item--active")
       this.classList.add('portofilo_item--active')
        $.querySelector('.potofolio__content--shows').classList.remove('potofolio__content--shows')
        let getId = this.getAttribute('content-id')
        $.querySelector(getId).classList.add('potofolio__content--shows')
    })
})

// scroll event 

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

// api obervation lead to  know we are visit wich part of web

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

// dark mode 
if (window.localStorage.getItem('them') === 'dark_mode') {
    $.documentElement.classList.toggle('dark_mode')
    darkModeBtn.innerHTML= moonIcon
}
darkModeBtn.addEventListener('click' , function () {
    $.documentElement.classList.toggle('dark_mode')
    if ($.documentElement.classList.contains('dark_mode')) {
        window.localStorage.setItem('them' , 'dark_mode')
        this.innerHTML = moonIcon
    }else{
        window.localStorage.setItem('them' , 'light_tem')
        this.innerHTML = sunIcon
    }
})
