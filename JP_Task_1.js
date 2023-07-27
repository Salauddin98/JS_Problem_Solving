//Task------------------1
//Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseFunction(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}
const inputString = "Md. Salauddin";
const resultReverseString = reverseFunction(inputString);
console.log(resultReverseString);
