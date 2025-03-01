// 🔹 Функция изменения товара
function changeProduct(id, newName, newPrice, newImage) {
    let product = document.getElementById(id);
    if (!product) {
        console.error("❌ Ошибка: Карточка товара не найдена!");
        return;
    }

    product.querySelector("h3").innerText = newName;
    product.querySelector("p span").innerText = newPrice;
    product.querySelector("img").src = newImage;
}

// 🔹 Функция изменения фона всех товаров
function changeAllBackground() {
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.style.backgroundColor = "lightblue";
    });
}

// 🔹 Слайдер изображений
let images = ["T3-1.jpg", "T3-2.jpg", "T3-3.jpg", "T3-4.jpg", "T3-5.jpg"];
let currentIndex = 0;

function updateImage() {
    document.getElementById("sliderImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// 🔹 Форма добавления товаров
document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;

    if (!name || !price) {
        alert("⚠️ Введите название и цену!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = `${name} - ${price} тг.`;
    document.getElementById("productList").appendChild(listItem);

    console.log({ name, price });
});
