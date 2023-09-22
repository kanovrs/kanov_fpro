//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
let userText1 = prompt(``);
let userText2 = prompt(``);
let userText3 = prompt(``);

alert(`${userText1} ${userText2} ${userText3}`);

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
let inputNumber = prompt("Введіть п'ятизначне число:");

alert(`Результат: ${inputNumber.split("").join(" ")}`);



