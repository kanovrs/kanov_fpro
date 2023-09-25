const categoryList = document.querySelector('#category-list')
const categoryItems = document.querySelector('#category-items');
const productList = document.querySelector('#product-list');
const productItems = document.querySelector('#products-items');
const productInfo = document.querySelector('#product-info');
const buyButton = document.querySelector('#buy-button');
const myOrdersButton = document.querySelector('#my-orders-button');
const ordersList = document.querySelector('#orders-list');
const goCategoryBtn = document.querySelector('#go-category-btn');
const orderDetails = document.querySelector('#order-details');


const products = {
    'Телефони': [
        {
        name: 'Apple', description: `Экран (6.1", OLED (Super Retina XDR), 2532x1170) /
         Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп,
         фронтальная камера: 12 Мп / 128 ГБ встроенной памяти`, price: `13000 грн` },
        {
            name: 'Samsung', description: `Экран (6.8", Dynamic AMOLED 2X, 3088x1440) /
         Qualcomm Snapdragon 8 Gen 2 for Galaxy (3.36 ГГц + 2.8 ГГц + 2.8 ГГц + 2.0 ГГц) /
          основная квадро-камера: 200 Мп + 12 Мп + 10 Мп + 10 Мп`, price: `14000 грн` },
        {
            name: 'Xiaomi', description: `Экран (6.67", AMOLED, 2400x1080) /
         Qualcomm Snapdragon 732G (2.3 ГГц + 1.8 ГГц) /
         основная квадро-камера: 108 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальная 16 Мп / RAM 8 ГБ`, price: `9000 грн` },
    ],
    'Ноутбуки': [
        { name: 'Ноутбук Acer Aspire 5', description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-1135G7', price: `23000 грн` },
        { name: 'Ноутбук Lenovo IdeaPad Slim 3 15AMN8', description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 7520U', price: `25000 грн` },
        { name: 'Ноутбук ASUS TUF Gaming F15 ', description: 'кран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i5-11400H', price: `28000 грн` },
    ],
    'Телевизоры': [
        { name: 'Телевизор LG', description: 'Диагональ экрана 48"', price: `43000 грн` },
        { name: 'Телевизор Philips', description: 'Диагональ экрана 48"', price: `45000 грн` },
        { name: 'Телевизор Samsung', description: 'Диагональ экрана 65"', price: `54000 грн` },
    ],
};

function getSavedOrders() {
    const savedOrders = localStorage.getItem('userOrders');
    return savedOrders ? JSON.parse(savedOrders) : [];
}

function saveOrder(order) {
    const userOrders = getSavedOrders();
    userOrders.push(order);
    localStorage.setItem('userOrders', JSON.stringify(userOrders));
}

function displayOrders() {
    ordersList.innerHTML = '';
    const userOrders = getSavedOrders();
    userOrders.forEach((order, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('info-order')
        const orderDate = new Date(order.timestamp).toLocaleString();
        listItem.innerHTML = `
            <span>${order.productName}</span>
            <span>${orderDate}</span>
            <span>${order.totalPrice}</span>
            <button class="delete-order" data-index="${index}">Видалити</button>
        `;
        listItem.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-order')) {
                const index = e.target.getAttribute('data-index');
                deleteOrder(index);
                orderDetails.style.display = 'none';
            } else {
                    showOrderDetails(order);
                    orderDetails.style.display = 'block';
            }
        });
        ordersList.appendChild(listItem);
    });
}

function showOrderDetails(order) {
    orderDetails.innerHTML = `
        <h2>Деталі замовлення</h2>
        <p>Назва товару: ${order.productName}</p>
        <p>Ціна: ${order.totalPrice} грн</p>
        <p>Дата та час замовлення: ${new Date(order.timestamp).toLocaleString()}</p>
    `;
}


function deleteOrder(index) {
    const userOrders = getSavedOrders();
    userOrders.splice(index, 1);
    localStorage.setItem('userOrders', JSON.stringify(userOrders));
    displayOrders();
}

function addOrder(order) {
    saveOrder(order);
    displayOrders();
}

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
        <p>${product.price}</p>
        <button id="buy-button">Купити</button>
    `;
    const buyButton = document.querySelector('#buy-button');
    buyButton.style.display = 'block';
    buyButton.addEventListener('click', () => buyProduct(product.name, category));
    productInfo.style.display = 'block';
}

function buyProduct(productName, category) {
    const order = {
        timestamp: Date.now(),
        totalPrice: products[category].find((product) => product.name === productName).price,
        productName: productName,
    };
    addOrder(order);
    alert(`Товар "${productName}" куплений`);
    productInfo.style.display = 'none';
    productList.style.display = 'none';
}

myOrdersButton.addEventListener('click', () => {
    ordersList.style.display = 'block';
    categoryList.style.display = 'none';
    productList.style.display = 'none';
    productInfo.style.display = 'none';
    goCategoryBtn.style.display = 'block';
    displayOrders();
});
goCategoryBtn.addEventListener('click', () => {
    categoryList.style.display = 'block';
    ordersList.style.display = 'none';
    goCategoryBtn.style.display = 'none';
    orderDetails.style.display = 'none';

});

createCategoryList();
