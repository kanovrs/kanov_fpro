const categoryItems = document.getElementById('category-items');
const productList = document.getElementById('product-list');
const productItems = document.getElementById('products-items');
const productInfo = document.getElementById('product-info');
const buyButton = document.getElementById('buy-button');

const products = {
    'Телефони': [
        {
        name: 'Apple', description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) /
         Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп,
         фронтальная камера: 12 Мп / 128 ГБ встроенной памяти` },
        {
            name: 'Samsung', description: `Экран (6.8", Dynamic AMOLED 2X, 3088x1440) /
         Qualcomm Snapdragon 8 Gen 2 for Galaxy (3.36 ГГц + 2.8 ГГц + 2.8 ГГц + 2.0 ГГц) /
          основная квадро-камера: 200 Мп + 12 Мп + 10 Мп + 10 Мп` },
        {
            name: 'Xiaomi', description: `Экран (6.67", AMOLED, 2400x1080) /
         Qualcomm Snapdragon 732G (2.3 ГГц + 1.8 ГГц) /
         основная квадро-камера: 108 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальная 16 Мп / RAM 8 ГБ` },
    ],
    'Ноутбуки': [
        { name: 'Ноутбук Acer Aspire 5', description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-1135G7' },
        { name: 'Ноутбук Lenovo IdeaPad Slim 3 15AMN8', description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 7520U' },
        { name: 'Ноутбук ASUS TUF Gaming F15 ', description: 'кран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i5-11400H' },
    ],
    'Телевизоры': [
        { name: 'Телевизор LG', description: 'Диагональ экрана 48"' },
        { name: 'Телевизор Philips', description: 'Диагональ экрана 48"' },
        { name: 'Телевизор Samsung', description: 'Диагональ экрана 65"' },
    ],
};

function createCategoryList() {
    Object.keys(products).forEach(category => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = category;
        link.addEventListener('click', () => showCategory(category));
        categoryItems.append(listItem);
        listItem.append(link);
    });
}

function showCategory(category) {
    productItems.innerHTML = '';
    products[category].forEach((product, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = product.name;
        link.addEventListener('click', () => showProductInfo(category, index));
        listItem.append(link);
        productItems.append(listItem);
        productInfo.style.display = 'none';
    });
    productInfo.innerHTML = '';
    productList.style.display = 'block';
}

function showProductInfo(category, index) {
    const product = products[category][index];
    productInfo.innerHTML = `
        <h2>Інформація про товар</h2>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button id="buy-button">Купити</button>
    `;
    const buyButton = document.getElementById('buy-button');
    buyButton.style.display = 'block';
    buyButton.addEventListener('click', () => buyProduct(product.name));
    productInfo.style.display = 'block';
}

function buyProduct(productName) {
    alert(`Товар "${productName}" куплений`);
    productInfo.style.display = 'none';
    productList.style.display = 'none';

}
createCategoryList();
