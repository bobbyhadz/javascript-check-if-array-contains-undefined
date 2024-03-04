// EXAMPLE 1 - Check if an Array contains Undefined in JavaScript

function containsUndefined(arr) {
  return arr.includes(undefined);
}

console.log(containsUndefined([1, undefined])); // 👉️ true
console.log(containsUndefined([1, 2])); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if an Array contains Undefined using `Array.some()`

// function containsUndefined(arr) {
//   return arr.some(element => element === undefined);
// }

// console.log(containsUndefined([1, undefined])); // 👉️ true
// console.log(containsUndefined([1, 2])); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking for undefined values that are not empty elements

// const arr = [1, undefined, 3];

// if (arr.indexOf(undefined) > -1) {
//   // 👇️ this runs
//   console.log('The array contains undefined values');
// } else {
//   console.log("The array doesn't contain undefined values");
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if an Array contains Empty Elements in JavaScript

// const arr = [1, , 3];

// console.log(arr[1]); // 👉️ undefined

// console.log(arr.includes(undefined)); // 👉️ true

// if (arr.includes(undefined)) {
//   console.log(`✅ array contains an empty element(s)
//                or undefined value(s)`);
// } else {
//   console.log(`⛔️ array DOESN'T contain an empty
//                element or undefined value`);
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Checking only for empty elements, not undefined

// function containsEmptyElements(arr) {
//   return Object.values(arr).length !== arr.length;
// }

// // 👇️ true
// console.log(containsEmptyElements([1, 2, , 4]));

// // 👇️ false
// console.log(containsEmptyElements([1, 2, undefined, 4]));

// ------------------------------------------------------------------

// // EXAMPLE 6 - Checking only for empty elements, not undefined using `indexOf`

// function containsEmptyElements(arr) {
//   return (
//     arr.indexOf(undefined) === -1 && arr.includes(undefined)
//   );
// }

// const arr = [1, 2, , 4];

// console.log(containsEmptyElements(arr)); // 👉️ true

// if (containsEmptyElements(arr)) {
//   // 👇️ this runs
//   console.log('✅ The array contains empty element(s)');
// } else {
//   console.log("⛔️ The array DOESN'T contain empty elements");
// }
