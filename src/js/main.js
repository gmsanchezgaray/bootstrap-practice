let navbar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 400){
        navbar.style.width = '100%'
        navbar.style.position = 'fixed'
        navbar.style.backgroundColor = 'rgba(0,0,0,.87)'
        navbar.style.zIndex = '5'
    }

    if(window.scrollY < 400){
        navbar.style.position = 'relative'
        navbar.style.backgroundColor = 'transparent'
        navbar.style.zIndex = '1'
    }
})
