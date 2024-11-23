// "use strict";

// const dropDowns = document.getElementsByClassName("dropdownSelected");
// for (let i = 0; i < dropDowns.length; i++) {
//     dropDowns[i].addEventListener("click", function () {
//         this.classList.toggle("selected");
//     });
// }

// // смена цвета шапки при скролле

// document.addEventListener("scroll", () => {
//     const header = document.querySelector("header");

//     if (window.scrollY > 0) {
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });

// // смена цвета шапки при скролле

// // выадающее меню при наведении

// // // // затемнение при открытом поп апе
// const burgerButton = document.getElementById("burgerButton");
// const mobileMenu = document.getElementById("mobileMenu");
// const body = document.body;

// const modal = document.getElementById("questionModal");
// const openModalButton = document.getElementById("openModal");
// const closeModalButton = document.getElementById("closeDialog");
// const backdrop = document.getElementById("backdrop");

// // Обработчик для кнопки бургер-меню
// burgerButton.addEventListener("click", function () {
//     // Проверяем, открыто ли модальное окно
//     if (!modal.hasAttribute("open")) {
//         body.classList.toggle("opened"); // Открываем/закрываем мобильное меню
//     }
// });

// // Функция для открытия модального окна
// function openModal() {
//     modal.setAttribute("open", "");
//     backdrop.classList.remove("hidden");
//     body.classList.add("no-scroll"); // Блокируем прокрутку
// }

// // Функция для закрытия модального окна
// function closeModal() {
//     modal.removeAttribute("open");
//     backdrop.classList.add("hidden");
//     body.classList.remove("no-scroll"); // Возвращаем прокрутку
// }

// // Обработчики для кнопок открытия/закрытия модального окна
// openModalButton.addEventListener("click", openModal);
// closeModalButton.addEventListener("click", closeModal);

// // Закрытие модального окна по нажатию на клавишу Escape
// document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape" && modal.hasAttribute("open")) {
//         closeModal();
//     }
// });

// // Убираем затемнение при закрытии модалки
// closeModalButton.addEventListener("click", function () {
//     backdrop.classList.add("hidden");
// });

// // imask

// document.querySelectorAll(".phone-mask").forEach((e) => {
//     const phoneMask = IMask(e, { mask: "+{7}(000)000-00-00" });
// });

// // imask

// // слайдер триггер

// new Swiper(".swiper", {
//     slidesPerView: 4,
//     breakpoints: {
//         1: { slidesPerView: 1 },
//         400: { slidesPerView: 2 },
//         600: { slidesPerView: 3 },
//         800: { slidesPerView: 4 },
//         1024: { slidesPerView: 5 },
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// // слайдер триггер

// // слайдер блог

// new Swiper(".blog__swiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     loop: true,
//     breakpoints: {
//         1: { slidesPerView: 1 },
//         1024: { slidesPerView: 2 },
//     },
//     navigation: {
//         nextEl: ".blog__swiper-button-next",
//         prevEl: ".blog__swiper-button-prev",
//     },
// });

// // слайдер блог

// Проверка наличия элементов и добавление обработчиков событий
const dropDowns = document.getElementsByClassName("dropdownSelected");
if (dropDowns.length > 0) {
    for (let i = 0; i < dropDowns.length; i++) {
        dropDowns[i].addEventListener("click", function () {
            this.classList.toggle("selected");
        });
    }
}

// Смена цвета шапки при скролле
const header = document.querySelector("header");
if (header) {
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Затемнение при открытом поп апе
const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.body;

const modal = document.getElementById("questionModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeDialog");
const backdrop = document.getElementById("backdrop");

if (burgerButton) {
    burgerButton.addEventListener("click", function () {
        if (modal && !modal.hasAttribute("open")) {
            body.classList.toggle("opened");
        }
    });
}

if (modal) {
    function openModal() {
        modal.setAttribute("open", "");
        backdrop.classList.remove("hidden");
        body.classList.add("no-scroll");
    }

    function closeModal() {
        modal.removeAttribute("open");
        backdrop.classList.add("hidden");
        body.classList.remove("no-scroll");
    }

    if (openModalButton) {
        openModalButton.addEventListener("click", openModal);
    }

    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.hasAttribute("open")) {
            closeModal();
        }
    });

    closeModalButton.addEventListener("click", function () {
        backdrop.classList.add("hidden");
    });
}

// Проверка наличия библиотеки IMask
if (typeof IMask !== "undefined") {
    document.querySelectorAll(".phone-mask").forEach((e) => {
        IMask(e, { mask: "+{7}(000)000-00-00" });
    });
}

// Проверка наличия библиотеки Swiper
if (typeof Swiper !== "undefined") {
    new Swiper(".hero__swiper", {
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

    new Swiper(".research__swiper", {
        spaceBetween: 30,
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            1: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
