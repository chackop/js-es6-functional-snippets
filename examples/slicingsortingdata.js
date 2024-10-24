const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice().reverse());
console.log(numbers);

//sorting
const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(descending);

console.log(sortedNumbers);
