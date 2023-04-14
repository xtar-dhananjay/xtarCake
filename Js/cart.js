let navbarMenu = document.querySelectorAll('header nav a');
navbarMenu[0].classList.remove('activeNav');
navbarMenu[1].classList.add('activeNav');

let couponCollapseBtn = document.querySelector('#couponHeading i');
let couponBox = document.getElementById('couponBox');

couponCollapseBtn.onclick = () => {
    couponBox.classList.toggle('disActive');
    if (couponBox.classList.contains('disActive')) {
        couponCollapseBtn.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }else{
        couponCollapseBtn.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
}