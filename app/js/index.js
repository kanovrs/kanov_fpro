class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    if (this.isValidOperator(znak)) {
      const confirmed = confirm(`Зробити математичну операцію ${X} ${znak} ${Y}?`);

      if (confirmed) {
        this.performOperation(X, Y, znak);
      } else {
        this.input();
      }
    } else {
      alert('Некоректний оператор. Введіть +, -, /, *, або %.');
      this.input();
    }
  }

  input() {
    const X = parseFloat(prompt('Введіть число X:'));
    const Y = parseFloat(prompt('Введіть число Y:'));
    const znak = prompt('Введіть оператор (+, -, /, *, %):');
    this.check({ X, Y, znak });
  }

  performOperation(X, Y, znak) {
    let result;
    switch (znak) {
      case '+':
        result = X + Y;
        break;
      case '-':
        result = X - Y;
        break;
      case '*':
        result = X * Y;
        break;
      case '/':
        if (Y === 0) {
          alert('Ділення на нуль неможливе.');
          this.input();
          return;
        }
        result = X / Y;
        break;
      case '%':
        result = X % Y;
        break;
    }
    alert(`Результат: ${X} ${znak} ${Y} = ${result}`);
  }

  isValidOperator(znak) {
    return ['+', '-', '/', '*', '%'].includes(znak);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);
