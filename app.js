let navToggleBtn = document.querySelector('.toggleBtn');
let navItems = document.querySelector('.navItems');

navToggleBtn.addEventListener('click',()=>{
    navItems.classList.toggle('active');
})
