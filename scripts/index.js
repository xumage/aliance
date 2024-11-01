const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

// Добавляем обработчик события на бургер-кнопку
burgerButton.addEventListener("click", function () {
    // Переключаем класс active у мобильного меню
    header.classList.toggle("opened");
});
