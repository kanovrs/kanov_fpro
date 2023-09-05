function sumVariable () {
  let totalAmount = 0;

  function sum(number) {
    totalAmount += number;
    return totalAmount;
  }

  return sum;
}

const closureFunc = sumVariable ();

console.log(closureFunc(3));
console.log(closureFunc(5));
console.log(closureFunc(20));