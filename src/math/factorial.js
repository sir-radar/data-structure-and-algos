// Problem: Given an integer n, find the factorial of that integer. ie: n!
// Example: f(0) => 1. f(4) => 4 * 3 * 2 * 1 = 24

function factorial(n) {
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac *= i;
  }

  return fac;
}
