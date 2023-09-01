function recursiveExponentiation(num, degree) {
  if (degree == 0) {
    return 1;
  } else {
    if (degree == 1) {
    return num;
    }
    else {
      return num * recursiveExponentiation(num, degree - 1);
    }
  } 
}

console.log(recursiveExponentiation(3, 3));
