const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const dropdown = document.querySelector('.dropdown')


btnHamburger.addEventListener('click', function(){
    console.log('burger clicked');

    if(header.classList.contains('open' )){
        header.classList.remove('open')
        
        dropdown.classList.remove('fade-in')
        dropdown.classList.add('fade-out')
    } else {
        header.classList.add('open')

        dropdown.classList.remove('fade-out')
        dropdown.classList.add('fade-in')
    }
})