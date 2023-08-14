/**
 * this function is used to find the sum function
 * @param {numbers} numbers must be a numbers
 * @returns a result
 */
function sumOfNumbers(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

const numbersToSum = [5, 10, 15, 20];
const totalSum = sumOfNumbers(numbersToSum);
console.log("The sum of the numbers is:"+totalSum);
