const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

// Добавляем обработчик события на бургер-кнопку
burgerButton.addEventListener("click", function () {
    // Переключаем класс active у мобильного меню
    header.classList.toggle("opened");
});

const dropDowns = document.getElementsByClassName("dropdownSelected");
for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", function () {
        // Переключаем класс "selected" у текущего элемента
        this.classList.toggle("selected");
    });
}
