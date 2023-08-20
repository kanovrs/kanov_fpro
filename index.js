let action = prompt ("Оберіть дію (add, sub, mult, div)" )
let result;
let num1 = +prompt("вкажіть перше число");
let num2 = +prompt("вкажіть друге число");
    switch (action) {
      case 'add':
        result = num1 + num2;
        alert (`${num1} + ${num2} = ${result}`);
        break;
      case 'sub':
        result = num1 - num2;
        alert (`${num1} - ${num2} = ${result}`);
        break;
      case 'mult':
        result = num1 * num2;
        alert (`${num1} * ${num2} = ${result}`);
        break;
      case 'div':
          result = num1 / num2;
          alert (`${num1} / ${num2} = ${result}`);
          break;
    }