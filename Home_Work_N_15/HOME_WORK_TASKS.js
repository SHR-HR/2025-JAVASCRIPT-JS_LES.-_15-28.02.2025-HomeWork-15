// ========================================================================================================
// Урок от 28 февраля 2025. Домашнее задание.
// ========================================================================================================
// ========================================================================================================
// Курс:  Разработка интерфейса на JavaScript
// ========================================================================================================
// ========================================================================================================
// Дисциплина: Основы  JavaScript
// ========================================================================================================

// ========================================================================================================
// Домашнее задание №16: Взаимодействие с HTML. BOM, DOM.
// ========================================================================================================
// ========================================================================================================
// Решите данные задачи:
// --------------------------------------------------------------------------------------------------------
// 1. Пользователь вводит дату рождения (день, месяц, год).
// Вывести количество полных лет на данный момент времени.
// --------------------------------------------------------------------------------------------------------
// 2. Создать массив из названий цветов (4-5 цветов). 
// Написать функцию, которая случайным образом меняет цвет у карточки раз в 3 секунды.
// --------------------------------------------------------------------------------------------------------
// 3. Создать html-страницу для магазина книг. 
// Пользователь должен иметь возможность выбрать книгу, указать количество экземпляров, 
// ввести свое имя, дату доставки, адрес доставки и комментарий. 
// После заполнения формы необходимо вывести на экран: «Имя покупателя, спасибо за заказ. 
// Такой-то товар будет доставлен в такую-то дату по такому-то адресу».
// ========================================================================================================

// --------------------------------------------------------------------------------------------------------
// 🔹 1. Вычисление возраста
function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Введите дату рождения!");
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();

    if (today.getMonth() < birthDateObj.getMonth() ||
        (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    document.getElementById("ageResult").innerText = `Вам ${age} лет.`;
}
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
// 🔹 2. Случайное изменение цвета карточки
const colors = ["red", "blue", "green", "orange", "purple"];

function changeColor() {
    let box = document.getElementById("colorBox");
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

setInterval(changeColor, 3000);
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
// 🔹 3. Магазин книг
function selectBook(book) {
    let selectedBook = book.closest('.book');
    let title = selectedBook.dataset.title;
    let price = selectedBook.dataset.price;
    let imgSrc = selectedBook.dataset.img;

    document.getElementById("bookTitle").value = title;
    document.getElementById("bookPrice").value = price;
    document.getElementById("bookImage").src = imgSrc;
    document.getElementById("bookImage").style.display = "block";

    calculateTotal();
}

function calculateTotal() {
    let quantity = parseInt(document.getElementById("quantity").value) || 1;
    let bookPrice = parseFloat(document.getElementById("bookPrice").value) || 0;
    let totalPrice = quantity * bookPrice;

    document.getElementById("totalPrice").value = totalPrice.toFixed(2);
}

document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let bookTitle = document.getElementById("bookTitle").value;
    let quantity = document.getElementById("quantity").value;
    let totalPrice = document.getElementById("totalPrice").value;
    let name = document.getElementById("customerName").value;
    let deliveryDate = document.getElementById("deliveryDate").value;
    let address = document.getElementById("address").value;
    let paymentMethod = document.getElementById("paymentMethod").value;
    let bookImageSrc = document.getElementById("bookImage").src;

    let result = `
        <p><b>${name}, спасибо за заказ!</b></p>
        <img src="${bookImageSrc}" alt="Книга" class="selected-book-image" style="width:100px; height:auto;">
        <p>Книга "<b>${bookTitle}</b>" (${quantity} шт.) будет доставлена <b>${deliveryDate}</b> по адресу: <b>${address}</b>.</p>
        <p>Способ оплаты: <b>${paymentMethod}</b></p>
        <p>Общая стоимость заказа: <b>${totalPrice} тг.</b></p>
    `;

    document.getElementById("orderResult").innerHTML = result;
});
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
// Взаимодействие с HTML (Document Object Model - DOM)
// Это основная работа с HTML-страницей через JavaScript:

// Выбор элементов с помощью document.getElementById() и document.querySelector().
// Изменение содержимого страницы с помощью .innerText и .innerHTML.
// Добавление событий на кнопки и формы с помощью addEventListener().
// Манипуляция атрибутами (например, изменение value у input).
// Динамическое изменение стилей через style.backgroundColor.
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
// Взаимодействие с BOM (Browser Object Model)
// BOM — это объекты браузера, с которыми можно работать в JavaScript:

// window.alert() — вызов всплывающих уведомлений.
// window.setInterval() — выполнение кода через интервалы.
// window.setTimeout() — задержка перед выполнением кода.
// navigator — информация о браузере пользователя.
// location — работа с URL и переходами.
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
// Взаимодействие с DOM (управление структурой HTML)
// DOM позволяет изменять HTML-страницу на лету:

// Изменение структуры HTML (innerHTML, createElement, appendChild).
// Обновление значений в формах (value).
// Работа с событиями (onclick, oninput, addEventListener).
// Изменение атрибутов (setAttribute, getAttribute).
// --------------------------------------------------------------------------------------------------------

// Этот код включает все три уровня взаимодействия:

// HTML (DOM): работа с элементами страницы, изменение текста, получение значений.
// BOM: использование setInterval() для анимации и alert() для уведомлений.
// DOM (управление структурой): изменение формы заказа, добавление динамических данных.
