// https://kursjava.com/tablice/zadania-do-tablic/
// Co druga wartość tablicy¶
// Napisz program, który wypisze co drugi element zdefiniowanych przez Ciebie tablic. Pierwsza tablica powinna mieć parzystą liczbę elementów, a druga nieparzystą.

// const arr = ["banana", "pinapple", "grape", "orange", "apple", "grape"];
// const arr2 = [10, -3, 7, 100, 22, 21, 453];
// const arr3 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48]
// const arr4 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51]

// for (const[index, value] of arr3.entries()) {
//   if (index % 2 == 0) {
//     console.log("Tablica 1: " + value);
//   }
// }

// for (const[index, value] of arr4.entries()) {
//   if (index % 2 == 0) {
//     console.log("Tablica 2: " + value)
//   }
// }


// Największa liczba w tablicy¶
// Napisz program, który wypisze największą liczbę z tablicy. Tablicę zainicjalizuj przykładowymi wartościami.


//  let highest = "";
//  for (const val of arr2) {
//  	if (val > highest) {
//   	highest = val;
//   }
//  }
 
//  console.log(highest);

// Słowa z tablicy wielkimi literami¶
// Napisz program, w którym zdefiniujesz tablicę wartości typu String i zainicjalizujesz ją przykładowymi wartościami. Skorzystaj z pętli for-each, aby wypisać wszystkie wartości tablicy ze wszystkimi literami zamienionymi na wielkie. Skorzystaj z funkcjonalności toUpperCase wartości typu String, którą poznaliśmy już w jednym z poprzednich rozdziałów.

// const arr = ["banana", "pinapple", "grape", "orange", "apple", "grape"];

 
// for (const value of arr) {
//   console.log(value.toUpperCase());
// }

// Odwrotności słów w tablicy¶
// Napisz program, który pobierze od użytkownika pięć słów i zapisze je w tablicy. Następnie, program powinien wypisać wszystkie słowa, od ostatniego do pierwszego, z literami zapisanymi od końca do początku. Dla przykładu, dla podanych słów "Ala", "ma", "kota", "i", "psa" program powinien wypisać: "asp", "i", "atok", "am", "alA".

// const arr = ["banana", "pinapple", "grape", "orange", "apple", "grape"];

//   for (var i = arr.length -1; i >= 0; i--) {   	
//     let y = ""
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//     y += arr[i][j]; 
//   } 
//   console.log(y)
// }


// Napisz program, który pobierze od użytkownika osiem liczb, zapisze je w tablicy, a następnie posortuje tą tablicę rosnąco i wypisze wynik sortowania na ekran. Dla przykładu, dla liczb 10, -2, 1, 100, 20, -15, 0, 10, program wypisze -15, -2, 0, 1, 10, 10, 20, 100. Zastanów się, jak można posortować ciąg liczb i spróbuj zaimplementować swoje rozwiązanie. Przetestuj je na różnych zestawach danych. Możesz też skorzystać z jednego z popularnych algorytmów sortowania, np. sortowania przez wstawianie. Opis tego algorytmu znajdziesz w internecie.


// const arr = [10, -3, 7, 100, 22, 21, 453];

// let isSorted = false;
// while (!isSorted) {
//   isSorted = true;
//   for (const[index, value] of arr2.entries()) {
//      if (arr2[index] > arr2[index + 1]) {
//        isSorted = false;
//        let storeVal = arr2[index];
//       arr2[index] = arr2[index + 1];
//       arr2[index + 1] = storeVal;
//      }
//   }
// }

// console.log(arr2);



// Napisz program, w którym zdefiniujesz dwie tablice przechowujące wartości typu String. Zainicjalizuj obie tablice takimi samymi wartościami, w takiej samej kolejności. Napisz kod, który porówna obie tablice i odpowie na pytanie, czy są one takie same.
// teraz to


// const arr1 = ["Anglia", "Ukraina", "Czechy"];
// const arr2 = ["Anglia", "Ukraina", "Czechy"];

// if (arr1.length === arr2.length) {
//   for (const [index, value] of arr1.entries()) {
//     if (arr1[index] !== arr2[index]) {
//       console.log("Tablice mają różne wartości")
//       break;
//     }
//   }
//   console.log("Tablice są takie same")
// } else {
//   console.log("Tablice mają inną długość")
// }