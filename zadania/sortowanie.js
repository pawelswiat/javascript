// 1 - sortowanie wg nazwy A -> Z
// 2 - sortowanie wg nazwy Z -> A
const fruits = ["banana", "pinapple", "grape", "orange", "apple"];
const out = [];

let isSorted;
while (!isSorted) {
  isSorted = true;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] > fruits[i + 1]) {
      isSorted = false;
      let storeVal = fruits[i];
      fruits[i] = fruits[i + 1];
      fruits[i + 1] = storeVal;
    }
  }
}
console.log(fruits);

// 3 - sortowanie wg model A -> Z
// 4 - sortowanie wg id 0 -> infinity
const cars = [
  {
    model: "punto",
    id: 213
  },
  {
    model: "uno",
    id: 533
  },
  {
    model: "m3",
    id: 21
  },
  {
    model: "ceed",
    id: 1
  },
  {
    model: "lynx-car",
    id: 5
  }
];

const out2 = [];

//console.log(out);
