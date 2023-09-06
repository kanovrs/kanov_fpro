// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.



const arr = [16,'ok',54,'cancel',72,47,4,true,25,46,'confirm',4,54];

function arrFilter (numArr) {
  
  const numValues = arr.filter(item => typeof item == 'number');

  const sum = numValues.reduce((acum, el) => acum + el, 0);
  
  const average = sum / numValues.length;

  return average;
}

const result = arrFilter (arr);
console.log(`Cереднє арифметичне лише числових елементів даного масиву = ${result}`);



/* Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
 У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
 Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/
 
 
 
 function doMath(x, znak, y) {
  let result;

  switch (znak) {
    case '+': 
      result = x + y;
    break;
    case '-':
      result = x - y;
    break;
    case '*':
      result = x * y;
    break;
    case '/':
      if (y !== 0) {
        result = x / y;
      }
      else {
        result = "Ділення на нуль неможливе";
      }
    break;
    case '%':
      result = x % y;
    break;
    case '^':
      result = Math.pow(x, y);
    break;
  }
  return result;
  }

let x = prompt(`Enter the first number`);
let znak = prompt(`Enter action(+, -, *, /, %, ^ (ступінь ))`);
let y = prompt(`Enter the second number`);

let result = doMath(x, znak, y);
alert(result);



 /* Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.*/



function fillArr() {
  const line = prompt("Введіть кількість рядків:");
  const columns = prompt("Введіть кількість стовпців:");

  const arr = [];

  for (let i = 0; i < line; i++) {
    arr[i] = [];
    for (let j = 0; j < columns; j++) {
      const value = prompt(`Введіть значення для [${i}][${j}]:`);
      arr[i][j] = value;
    }
  }

  return arr;
}

const arrTwo = fillArr();

console.log(`Ваш заповнений двовимірний масив:`);

for (let i = 0; i < arrTwo.length; i++) {
  console.log(arrTwo[i]);
}


/* Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
 Вихідний рядок та символи для видалення задає користувач.*/

 function deleteElem (text, deleteSymbol) {
  let deleteSymbolstr = deleteSymbol.join('');
  let newTxt = text.replace(new RegExp(`[${deleteSymbolstr}]`, 'g'), '')
  return newTxt;
 }

let text = 'hello world';
let deleteSymbol = ['l', 'd'];
let txtResult = deleteElem(text, ['l', 'd']);
console.log(txtResult);
