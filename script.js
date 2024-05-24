const toogleButton = document.getElementsByClassName('toogle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toogleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}) 