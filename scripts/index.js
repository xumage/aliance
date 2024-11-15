// burger button

const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

burgerButton.addEventListener("click", function () {
    header.classList.toggle("opened");
});

// блокировка скролла при открытом моб меню

burgerButton.addEventListener("click", function () {
    body.classList.toggle("opened");
});

// блокировка скролла при открытом моб меню

// burger button

// выадающее меню при наведении

const dropDowns = document.getElementsByClassName("dropdownSelected");
for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", function () {
        this.classList.toggle("selected");
    });
}

// смена цвета шапки при скролле

document.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// смена цвета шапки при скролле

// выадающее меню при наведении

// imask

const element = document.getElementById("feedbackPhone");
const maskOptions = {
    mask: "+{7}(000)000-00-00",
};
const mask = IMask(element, maskOptions);

// imask

// слайдер триггер

new Swiper(".swiper", {
    slidesPerView: 4,
    breakpoints: {
        1: { slidesPerView: 1 },
        400: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        800: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// слайдер триггер

// слайдер блог

new Swiper(".blog__swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
    },
    navigation: {
        nextEl: ".blog__swiper-button-next",
        prevEl: ".blog__swiper-button-prev",
    },
});

// слайдер блог
