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
  },
  {
    model: "lynx-kombajn",
    marka: "lynx",
    id: "6"
  }
];

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
}
*/

const out2 = {};
