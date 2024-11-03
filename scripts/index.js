const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

burgerButton.addEventListener("click", function () {
    header.classList.toggle("opened");
});

const dropDowns = document.getElementsByClassName("dropdownSelected");
for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", function () {
        this.classList.toggle("selected");
    });
}

new Swiper(".swiper", {
    slidesPerView: 4,
    breakpoints: {
        1: { slidesPerView: 1 },
        400: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        800: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
    // 1280: { slidesPerView: 5 },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
