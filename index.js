let date = prompt ('Введіть данні через кому')
let arr = date.split(',');
console.log (arr);
alert (`${arr}`);
arr.sort((a,b) => a-b);
alert (`${arr}`);
arr.splice(2, 4);
alert (`${arr}`);