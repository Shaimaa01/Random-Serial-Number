/*
    [1] Set Characters To Create The Serial
    [2] Set Serial Characters Count
    [3] Create Empty Variable To Store The Serial
    [4] Create Random Number + Access Sequence 
    [5] Store The Random Element in The Empty Variable
    [6] Loop x count
    [7] Change Serial Element Content With The Serial Variable
*/

// const lowercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
//   String.fromCharCode(i + 97)
// );
// console.log(lowercaseAlphabet); // Output: ['a', 'b', 'c', ..., 'z']

// // Generate uppercase alphabet
// const uppercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
//   String.fromCharCode(i + 65)
// );
// console.log(uppercaseAlphabet); // Output: ['A', 'B', 'C', ..., 'Z']

// // Generate numbers 0 to 9 using ASCII values
// const numbersArray = Array.from({ length: 10 }, (_, i) =>
//   String.fromCharCode(i + 48)
// );
// console.log(numbersArray); // Output: ['0', '1', '2', ..., '9']

// // Generate random characters
// let random_lowercaseAlphabet =
//   lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
// let random_uppercaseAlphabet =
//   uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
// let random_numbersArray =
//   numbersArray[Math.floor(Math.random() * numbersArray.length)];

// let allArrays = [...lowercaseAlphabet, ...uppercaseAlphabet, ...numbersArray];

// let serial = document.querySelector(".serial");

// document.querySelector(".generate").addEventListener("click", function () {
//   let selectedCharacters = [];
//   for (i = 0; i < 10; i++) {
//     selectedCharacters.push(
//       allArrays[Math.floor(Math.random() * allArrays.length)]
//     );
//   }
//   serial.textContent = selectedCharacters.join("");
//   console.log(selectedCharacters.join(""));
// });

// another way

let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
  let characters = "1234567890abcdefghlmpnquarstuvABCDEFGHLMNIPQRSTUVXZYZ@#$%^";
  let charsCount = 10;
  let randomSerial = "";

  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial
};
