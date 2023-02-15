// Problem: Given a positive integer n, determine if the number is a power of two or not
//Hints:
// An integer is a power of two if there exists an integer x such that n === 2^x

function isPowerOfTwo(n) {
  if (n < 1) return false;
  for (let i = 0; i < n; i++) {
    if (n === 2 ** i) return true;
  }

  return false;
}

//other solutions

function isPowerOfTwo(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}
