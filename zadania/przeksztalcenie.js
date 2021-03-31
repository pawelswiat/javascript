const cars = [
  {
    model: "punto",
    marka: "fiat",
    id: "213"
  },
  {
    model: "uno",
    marka: "fiat",
    id: "533"
  },
  {
    model: "m3",
    marka: "bmw",
    id: "21"
  },
  {
    model: "ceed",
    marka: "kia",
    id: "1"
  },
  {
    model: "lynx-car",
    marka: "lynx",
    id: "5"
  }
];

/* 1. zadanie - zamiana tablicy numerycznej na asocjacyjną
{
  '213': {
    model: "punto",
    marka: "fiat",
  },
  '533': {
    model: "uno",
    marka: "fiat",
  },
  ....
}
*/
let out = {};
for (let i = 0; i < cars.length; i++) {
  out[cars[i].id] = [];
  out[cars[i].id].push({
    model: cars[i].model,  
    marka: cars[i].marka
  })
}

console.log(out);