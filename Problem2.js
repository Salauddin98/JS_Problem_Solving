// Write a code to calculate if the string is palindrome ?
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleanStr is the same when reversed
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

// Example usage:
const inputString = "A man, a plan, a canal: Panama";
console.log("Input String:", inputString);
console.log("Is palindrome:", isPalindrome(inputString)); // Output: true
