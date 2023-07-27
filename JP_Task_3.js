//Task-------------------3
//Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
  // Create an object to store the count of each element
  const elementCount = {};

  // Loop through the array and count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elementCount[element] === undefined) {
      elementCount[element] = 1;
    } else {
      elementCount[element]++;
    }
  }

  // Find the element with the highest count
  let mostFrequentElement;
  let highestCount = 0;
  for (const element in elementCount) {
    if (elementCount[element] > highestCount) {
      highestCount = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

// Test the function
const arr = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2];
const mostFrequent = findMostFrequentElement(arr);
console.log(`The most frequent element is: ${mostFrequent}`); // Output: The most
