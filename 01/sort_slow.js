const lodash = require('lodash');
const arr = lodash.range(10000000);

// console.log(arr);

// function sort(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//       }
//     }
//   }
// }

function sort(arr) {
  arr.sort();
}

sort(arr);

// console.log(arr);