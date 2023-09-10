let navMenu = document.getElementById('nav-menu');
let toggleGrid = document.getElementById('toggle-grid');
let toggleMark = document.getElementById('toggle-mark');
let navLink = document.querySelectorAll('.nav__link');
let header = document.getElementById('header');
let scrollUp = document.getElementById('scroll-up');
let toggleMoon =document.getElementById('toggle-moon');
// click menu
if(toggleGrid){
    toggleGrid.addEventListener('click' , () => {
        navMenu.classList.add('show-menu')
    })
}
if(toggleMark){
    toggleMark.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    })
}

// show-menu Action
const navAction = () =>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener
    ('click' , navAction))

// scrollY
const showHeader = () =>{
    this.scrollY >= 55 ?header.classList.add('header-show')
                        :header.classList.remove('header-show')
}
window.addEventListener('scroll' , showHeader)

//scrollUp
const scrollUpShow = () =>{
    this.scrollY >= 250 ?scrollUp.classList.add('show-scroll__up')
                        :scrollUp.classList.remove('show-scroll__up')
}
// scrollUp.onclick = function(){
//     scroll({
//         left:0,
//         top:0,
//         behavior:"smooth"
//     })
// }
window.addEventListener('scroll' , scrollUpShow)


// dark mode

toggleMoon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains('dark-theme') ){
        toggleMoon.classList.remove("toggle-moon");
        toggleMoon.innerHTML="<i class='fas fa-sun'></i>";
    }else{
        toggleMoon.classList.add("toggle-moon");
        toggleMoon.innerHTML="<i class='far fa-moon'></i>";
    }
}

// scrollReveal
const sr = ScrollReveal ({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home__data , .home__join, .footer, .scroll__up')
sr.reveal ('.home .content h1' , { origin: 'left' } )
sr.reveal('.img-home' , { origin: 'bottom' }) 
sr.reveal('.card , .popular__cards', { interval: 100 }) 
sr.reveal('.img__about-2' , { origin: 'left' }) 
sr.reveal('.data__about' , { origin: 'right' }) 