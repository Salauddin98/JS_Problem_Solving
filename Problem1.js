// Write a code on how to calculate the number of vowels and consonants in a string?

function countVowelsAndConsonants(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase characters
  const lowerCaseStr = str.toLowerCase();

  // Initialize counters for vowels and consonants
  let vowelCount = 0;
  let consonantCount = 0;

  // Define a regular expression to match vowels
  const vowelRegex = /[aeiou]/;
  //   const vowelRegex = "aeiou"; //when using includes();

  // Iterate through each character in the string
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];

    // Check if the character is a vowel using the regex
    if (vowelRegex.test(char)) {
      vowelCount++;
    } else if (char >= "a" && char <= "z") {
      // If the character is a letter (but not a vowel), count it as a consonant
      consonantCount++;
    }
  }

  // Return the counts as an object
  return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage:
const inputString = "Hello, World!";
const result = countVowelsAndConsonants(inputString);

console.log("Input String:", inputString);
console.log("Number of vowels:", result.vowels);
console.log("Number of consonants:", result.consonants);
