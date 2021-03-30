// https://kursjava.com/tablice/zadania-do-tablic/
// Co druga wartość tablicy¶
// Napisz program, który wypisze co drugi element zdefiniowanych przez Ciebie tablic. Pierwsza tablica powinna mieć parzystą liczbę elementów, a druga nieparzystą.

// const arr = ["banana", "pinapple", "grape", "orange", "apple", "grape"];
// let out = "";
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2) {
//     out += arr[i] + ", ";
//   }
// } console.log(out);


// Słowa z tablicy wielkimi literami¶
// Napisz program, w którym zdefiniujesz tablicę wartości typu String i zainicjalizujesz ją przykładowymi wartościami. Skorzystaj z pętli for-each, aby wypisać wszystkie wartości tablicy ze wszystkimi literami zamienionymi na wielkie. Skorzystaj z funkcjonalności toUpperCase wartości typu String, którą poznaliśmy już w jednym z poprzednich rozdziałów.

// const arr = ["banana", "pinapple", "grape", "orange", "apple", "grape"];

// for(let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].toUpperCase();  
// }
// console.log(arr);

// Odwrotności słów w tablicy¶
// Napisz program, który pobierze od użytkownika pięć słów i zapisze je w tablicy. Następnie, program powinien wypisać wszystkie słowa, od ostatniego do pierwszego, z literami zapisanymi od końca do początku. Dla przykładu, dla podanych słów "Ala", "ma", "kota", "i", "psa" program powinien wypisać: "asp", "i", "atok", "am", "alA".

const arr = ["banana", "pinapple", "grape", "orange", "apple", "grape"];
let output;
for (let i = 5; i < arr.length; i--) {
  console.log("test");
}
console.log('test');