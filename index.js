// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let arr = [];
let i = 9;

do {
    i++;
    arr.push(i);
} 
while(i < 20);
alert(arr);

// Вивести квадрати чисел від 10 до 20.

for (let y = 10; y < 21; y++) {
console.log(`Квадрат ${y} = ${y * y}`);
}

// Вивести таблицю множення на 7.

for (let  i = 1; i <= 10; i++) {
    let j=7;
      num = i * j;
    console.log (`${i} * ${j} = ${num}`);
  }
  
// Знайти суму всіх цілих чисел від 1 до 15.

function sumNumber(number) {
let sum = 0;

for(let i = 1; i <= number; i++){
  sum += i;
}
return sum;
}
console.log(`сумма чисел от 1 до 15 = ${sumNumber(15)}`);

// Знайти добуток усіх цілих чисел від 15 до 35

let mult = 1;

for(let i=15; i<=35; i++){
mult += i;
}
  
console.log(`добуток усіх цілих чисел від 15 до 35 = ${mult}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let n = 500;
let s = 0;
for (let i = 1; i <= n; i = i + 1) {
  s = s + i;
}
s = s / n;

console.log(`середнє арифметичне всіх цілих чисел від 1 до 500:', ${s}`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sumArr = [];

for (let i = 30; i <= 80; i++) {
  if (i % 2 == 0) {
    sumArr.push(i);
  }
}
let res = sumArr.reduce (function(sum, elem) {
	return sum + elem;
}, 0);

console.log(`сумa парних чисел в діапазоні від 30 до 80 = ${res}`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let number = prompt ('Введіть будь-яке число');
let divisorsArr = [];

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    divisorsArr.push(i);
  }
}
console.log(`дільники числа ${number} = ${divisorsArr}`);

// Визначити кількість його парних дільників.

let pairDivisArr = [];

for (let i = 0; i < divisorsArr.length; i++)
{
  if ((divisorsArr[i] % 2) === 0)
  {
    pairDivisArr.push(divisorsArr[i]);
  }
}

console.log(`кількість парних дільників: ${pairDivisArr.length}`);

// Знайти суму його парних дільників.

let resPairDiv = pairDivisArr.reduce (function(sum, elem) {
	return sum + elem;
}, 0);

console.log(`сумa парних дільників = ${resPairDiv}`);

// Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
      num = i * j;
      console.log (`${i} * ${j} = ${num}`);
    }
}




