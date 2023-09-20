let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += +prompt(`Введіть ${i + 1}-е число`);
}

let result = sum / 3;

alert(`Середнє арифметичне цих чисел: ${result}`);
