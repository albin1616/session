function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    const length = str.length;
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (str[i] !== str[length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  const inputString = "A man, a plan, a canal, Panama!";
  if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
  } else {
    console.log(`${inputString} is not a palindrome.`);
  }
  