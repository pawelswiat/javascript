// const cars = [
//   {
//     model: "punto",
//     marka: "fiat",
//     id: "213"
//   },
//   {
//     model: "uno",
//     marka: "fiat",
//     id: "533"
//   },
//   {
//     model: "m3",
//     marka: "bmw",
//     id: "21"
//   },
//   {
//     model: "ceed",
//     marka: "kia",
//     id: "1"
//   },
//   {
//     model: "lynx-car",
//     marka: "lynx",
//     id: "5"
//   },
//   {
//     model: "lynx-kombajn",
//     marka: "lynx",
//     id: "6"
//   }
// ];

/* 1. zadanie - agregacja wg marki w tablicy asocjacyjnej
{
  'fiat': [
    {
      model: "punto",
      marka: "fiat",
      id: "213"
    },
    {
      model: "uno",
      marka: "fiat",
      id: "533"
    }
  ],
  'kia': [
    {
      model: "ceed",
      marka: "kia",
      id: "1"
    }
  ]
  ....
// }
// */
// let output = {};
// for (let i = 0; i < cars.length; i++) {
  
//   if(!output[cars[i].marka]) {
//     output[cars[i].marka] = [];
//   } 
//     output[cars[i].marka].push(cars[i]);
// }
// console.log(output);


// 2. odwrotna  agregacja 



const cars = {
  bmw: [{
    id: "21",
    marka: "bmw",
    model: "m3"
}],
  fiat: [{
  id: "213",
  marka: "fiat",
  model: "punto"
}, {
  id: "533",
  marka: "fiat",
  model: "uno"
}],
  kia: [{
  id: "1",
  marka: "kia",
  model: "ceed"
}],
  lynx: [{
  id: "5",
  marka: "lynx",
  model: "lynx-car"
}, {
  id: "6",
  marka: "lynx",
  model: "lynx-kombajn"
}]
}

let out = []
for (let car in cars) {
	for (let i = 0; i < cars[car].length; i++) {
  	out.push(cars[car][i]);
  }
} 
console.log(out);