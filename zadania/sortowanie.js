// 1 - sortowanie wg nazwy A -> Z
// 2 - sortowanie wg nazwy Z -> A
const fruits = ["banana", "pinapple", "grape", "orange", "apple"];
const out = [];
//1 - sortowanie wg nazwy A -> Z
// let isSorted;
// while (!isSorted) {
//   isSorted = true;
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] > fruits[i + 1]) {
//       isSorted = false;
//       let storeVal = fruits[i];
//       fruits[i] = fruits[i + 1];
//       fruits[i + 1] = storeVal;
//     }
//   }
// }
// console.log(fruits);


// 2 - sortowanie wg nazwy Z -> A

// let isSorted;
// while (!isSorted) {
//   isSorted = true;
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] < fruits[i + 1]) {
//       isSorted = false;
//       let storeVal = fruits[i];
//       fruits[i] = fruits[i + 1];
//       fruits[i + 1] = storeVal;
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
// 	isSorted = true;
//   for (let i = 0; i < cars.length; i++) {
//     if (i < cars.length-1) {
//       if (cars[i].model > cars[i + 1].model) {
//       	isSorted = false;
//         let storeVal = cars[i];
//         cars[i] = cars[i + 1];
//         cars[i + 1] = storeVal;
//       }   
//     }   
//   }
// }
// console.log(cars);

//console.log(out);

// 4 - sortowanie obiektów wg id 0 -> infinity


// let isSorted;
// while(!isSorted) {
// 	isSorted = true;
//   for (let i = 0; i < cars.length; i++) {
//     if (i < cars.length-1) {
//       if (cars[i].id > cars[i + 1].id) {
//       	isSorted = false;
//         let storeVal = cars[i];
//         cars[i] = cars[i + 1];
//         cars[i + 1] = storeVal;
//       }   
//     }   
//   }
// }
// console.log(cars);
