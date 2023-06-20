function isPalindrome(str) {
    // Remove non-alphabetical characters
    const alphanumericString = str.replace(/[^a-zA-Z]/g, '');
  
    // Convert to lowercase
    const lowercaseString = alphanumericString.toLowerCase();
  
    // Check if the reversed string is equal to the original string
    const reversedString = lowercaseString.split('').reverse().join('');
    return lowercaseString === reversedString;
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
  console.log(isPalindrome("Race car")); // true
  console.log(isPalindrome("Hello, world!")); // false
  
// A DIFFERNT APPROACH

  function isPalindromeTwo(str) {
    // Remove non-alphabetical characters and convert to lowercase
    const alphanumericString = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    let left = 0;
    let right = alphanumericString.length - 1;
  
    while (left < right) {
      if (alphanumericString[left] !== alphanumericString[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPalindromeTwo("A man, a plan, a canal, Panama!")); // true
  console.log(isPalindromeTwo("Race car")); // true
  console.log(isPalindromeTwo("Hello, world!")); // false
  