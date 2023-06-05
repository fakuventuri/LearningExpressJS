function sumArrayValues(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function multiplyArrayValues(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
}

const array = [1, 11, 4, 5, 88];

console.log("Sum: " + sumArrayValues(array));
console.log("Multiply: " + multiplyArrayValues(array));
