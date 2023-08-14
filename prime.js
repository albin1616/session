/**
 * this fumnction is for prime function
 * @param {numbers} num must be a number
 * @returns a result
 */
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    if (num <= 3) {
      return true;
    }
    
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function findPrimesInRange(start, end) {
    const primes = [];
    
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    
    return primes;
  }
  
  const startRange = 1;
  const endRange = 50;
  
  const primeNumbers = findPrimesInRange(startRange, endRange);
  console.log(`Prime numbers between ${startRange} and ${endRange}: ${primeNumbers.join(', ')}`);
  