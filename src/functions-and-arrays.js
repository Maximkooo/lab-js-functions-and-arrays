// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2
}

console.log(maxOfTwoNumbers(4, 7));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
  if (!arr.length) return 0
  return arr.sort((a, b) => b.length - a.length)[0]
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(sumNumbers(numbers));





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!arr.length) return 0
  return sumNumbers(arr) / arr.length
}
console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, val) {
  if (!arr.length) return null
  return arr.includes(val)
}


console.log(doesWordExist([], 'trut'));