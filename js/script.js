window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
let a = 2;
let b = 5;
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
class Circle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
let v = 10;