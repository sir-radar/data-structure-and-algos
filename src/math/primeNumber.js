// Problem: Given a number n, determine if the number is prime or not
//Hints:
// Prime number is whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
//Big-O = O(n)

//optimal solution
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//Big-O = O(sqrt(n))
