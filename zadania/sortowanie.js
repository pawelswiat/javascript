// 1 - sortowanie wg nazwy A -> Z
// 2 - sortowanie wg nazwy Z -> A
const fruits = ["banana", "pinapple", "grape", "orange", "apple"];
const out = [];
//1 - sortowanie wg nazwy A -> Z
// let isSorted = false;
// while (!isSorted) {
// 	isSorted = true;
//   for (const [index, value] of fruits.entries()) {
//   	if (fruits[index] > fruits[index + 1]) {
//     	isSorted = false;
//       let storeValue = fruits[index];
//       fruits[index] = fruits[index + 1];
//       fruits[index + 1] = storeValue;
//     }
//   }
// }

// console.log(fruits);

// // 2 - sortowanie wg nazwy Z -> A
// let isSorted = false;
// while (!isSorted) {
// 	isSorted = true;
//   for (const [index, value] of fruits.entries()) {
//   	if (fruits[index] < fruits[index + 1]) {
//     	isSorted = false;
//       let storeValue = fruits[index];
//       fruits[index] = fruits[index + 1];
//       fruits[index + 1] = storeValue;
//     }
//   }
// }

// console.log(fruits);

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

// let isSorted;
// while(!isSorted) {
//   isSorted = true;
//   for (const [index, car] of cars.entries()) {   
//     if (cars[index + 1]) {
//       if (cars[index].model > cars[index + 1].model) {
//         isSorted = false;
//         let storeVal = cars[index];
//         cars[index] = cars[index + 1];
//         cars[index + 1] = storeVal;
//       }   
//     }     
//   }
// }
// console.log(cars);


// 4 - sortowanie obiektów wg id 0 -> infinity

// let isSorted;
// while(!isSorted) {
//   isSorted = true;
//   for (const [index, car] of cars.entries()) {   
//     if (cars[index + 1]) {
//       if (cars[index].id > cars[index + 1].id) {
//         isSorted = false;
//         let storeVal = cars[index];
//         cars[index] = cars[index + 1];
//         cars[index + 1] = storeVal;
//       }   
//     }     
//   }
// }
// console.log(cars);