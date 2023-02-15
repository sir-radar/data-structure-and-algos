// Problem: Given a number n, find the first n elements of the Fibonacci sequence
// Example: f(3) => [0,1,1]
//Hints:
// The first two numbers are 0 and 1.
// Each number is the sum of the previous two numbers
// The total length of a fibonacci is n number passed ie: if f(n), n === f(n).length

function f(n) {
  const fib = [0, 1];
  while (fib.length < n) {
    const nextNum = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextNum);
  }

  return fib;
}
