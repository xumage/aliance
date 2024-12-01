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
const logoPaths = document.querySelectorAll(".logo-color-path"); // Используем класс

if (header) {
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
            logoPaths.forEach((path) => {
                path.setAttribute("fill", "#292D33"); // Меняем цвет при прокрутке
            });
        } else {
            header.classList.remove("scrolled");
            logoPaths.forEach((path) => {
                path.setAttribute("fill", "#fff"); // Возвращаем исходный цвет
            });
        }
    });
}

// Затемнение при открытом поп апе
const burgerButton = document.querySelector(".burger-button");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

// if (burgerButton) {
//     burgerButton.addEventListener("click", function () {
//         if (modal && !modal.hasAttribute("open")) {
//             body.classList.toggle("opened");
//         }
//     });
// }

burgerButton.addEventListener("click", function () {
    body.classList.toggle("opened");
});

if (typeof IMask !== "undefined") {
    document.querySelectorAll(".phone-mask").forEach((e) => {
        IMask(e, { mask: "+{7}(000)000-00-00" });
    });
}

// Проверка наличия библиотеки Swiper
if (typeof Swiper !== "undefined") {
    new Swiper(".triggers__swiper", {
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
