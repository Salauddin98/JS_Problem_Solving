function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  arr.sort((a, b) => a - b);

  return arr[1];
}

// Test the function
const numbers = [10, 5, 7, 3, 8, 2];
const secondSmallestNumber = findSecondSmallest(numbers);
console.log(secondSmallestNumber);

// function findSecondSmallest(arr) {
//   if (arr.length < 2) {
//     return "Array must have at least two elements.";
//   }

//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }
//   }

//   if (secondSmallest === Infinity) {
//     return "There is no second smallest element.";
//   }

//   return secondSmallest;
// }

// // Test the function
// const numbers = [10, 5, 7, 3, 8, 2];
// const secondSmallestNumber = findSecondSmallest(numbers);
// console.log(secondSmallestNumber);
