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

// while (isSorted == false) {
// 	isSorted = true;
//   for (let i = 0; i < arr.length-1; i++) {    

//     if (arr[i] > arr[i+1]) {
//     isSorted = false;
//     let saveValue = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = saveValue;
//     }
    
//   } 
// } 

// console.log(arr);



// Napisz program, w którym zdefiniujesz dwie tablice przechowujące wartości typu String. Zainicjalizuj obie tablice takimi samymi wartościami, w takiej samej kolejności. Napisz kod, który porówna obie tablice i odpowie na pytanie, czy są one takie same.
// teraz to


// const arr1 = ["Anglia", "Ukraina", "Czechy"];
// const arr2 = ["Anglia", "Ukraina", "Czechy"];

// let areEqual = Boolean;
 
// for (let i = 0; i < arr1.length; i++) {
// 	if (arr1[i] === arr2[i]) {
//   	areEqual = true;
//   } 
//   else {
//   	areEqual = false; 
//     break;
//   }
// }
// if (!areEqual) {
// 	console.log("Tablice nie są takie same");
// } else {
// 	console.log("Tablice są takie same");
// }