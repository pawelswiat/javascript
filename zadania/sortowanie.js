// 1 - sortowanie wg nazwy A -> Z
// 2 - sortowanie wg nazwy Z -> A
const fruits = ["banana", "pinapple", "grape", "orange", "apple"];
const out = [];
//1 - sortowanie wg nazwy A -> Z
// const sortFunction = (passedArray) => {
// 	let output = passedArray;
//   let isSorted = false;
//    while (!isSorted) {
//      isSorted = true;
//      for (const[index, value] of output.entries()) {
//         if (output[index] > output[index + 1]) {
//           isSorted = false;
//           let storeVal = output[index];
//          output[index] = output[index + 1];
//          output[index + 1] = storeVal;
//         }
//      }
//   }
// 	return output;
// }
// console.log(sortFunction(arr2));

// const sortFunction = (passedArray) => {
// 	let output = passedArray;
//   let isSorted = false;
//    while (!isSorted) {
//      isSorted = true;
//      for (const[index, value] of output.entries()) {
//         if (output[index] < output[index + 1]) {
//           isSorted = false;
//           let storeVal = output[index];
//          output[index] = output[index + 1];
//          output[index + 1] = storeVal;
//         }
//      }
//   }
// 	return output;
// }
// console.log(sortFunction(arr2));

const cars = [
  {
    model: "punto",
    id: 213
  },
  {
    model: "uno",
    id: 1
  },
  {
    model: "m3",
    id: 21
  },
  {
    model: "ceed",
    id: 12
  },
  {
    model: "lynx-car",
    id: 5
  }
];

// 3 - sortowanie wg model A -> Z

// const sortArray = (passedArray) => {
//   let output = passedArray;
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (const [index, item] of passedArray.entries()) {
//       if (output[index + 1]) {
//         if (output[index].model > output[index + 1].model) {
//           isSorted = false;
//           let storeValue = output[index];
//           output[index] = output[index + 1];
//           output[index + 1] = storeValue;
//         }
//       }
//     }
//   }
//   return output;
// }

// console.log(sortArray(cars));


// 4 - sortowanie obiektów wg id 0 -> infinity

// const sortArray = (passedArray) => {
// 	let output = passedArray;
//   let isSorted = false;
//   while (!isSorted) {
//   	isSorted = true;
//     for (const [index, item] of passedArray.entries()) {
//     	if (output[index + 1]) {
//       	if (output[index].id > output[index + 1].id) {
// 				isSorted = false;
//         let storeValue = output[index];
//         output[index] = output[index + 1];
//         output[index + 1] = storeValue;
//      		}
//       }
//     }
//   }
//   return output;
// }

// console.log(sortArray(cars));