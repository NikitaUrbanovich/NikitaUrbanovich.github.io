
/*$(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
})*/
const header__burger = document.querySelector('.header__burger');
header__burger.addEventListener('click', function (event) {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});


