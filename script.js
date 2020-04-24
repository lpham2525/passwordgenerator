const genLength = parseInt(prompt("Choose a length for your password between 8-128 characters."));
if (genLength > 7 && genLength < 129) {
  alert("You've chosen" + genLength + "as the number of characters for your generated password.")
} else {
  alert("Please choose a number between 8 and 128.")
}

const genLength = parseInt(prompt("Choose a length for your password between 8-128 characters."));
const arrOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrTwo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const arrThree = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const str = "!#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"
let newPassword = ' '
const numbersElem = numbers.checked
const lowercaseElem = lowercase.checked
const uppercaseElem = uppercase.checked
const specialCharactersElem = specialCharacters.checked

function writePassword() {
  let passwordPlace = ' '
  if (lowercaseElem) {
    passwordPlace += arrOne;
  }
  if (uppercaseElem) {
    passwordPlace += arrTwo;
  }
  if (numbersElem) {
    passwordPlace += arrThree;
  }
  if (specialCharactersElem) {
    passwordPlace += str;
  }
}

for (let i = 0, i < genLength.length; i++) {
  let randomIndex = Math.floor(Math.random()) * passwordPlace.length) newPassword += passwordPlace [randomIndex]
} return newPassword

if (!lowercaseElem && !uppercaseElem && !numbersElem && !specialCharactersElem) {
  alert("Choose at least one criteria to generate password.")
}




// for (let i = 0; i < password.length; i++) {
// let genLength = ' '
// if (numbersElem) {
//       choices[Math.floor(Math.random() * arrOne.length)]
//  }
// if (lowercaseElem) {
//   choices[Math.floor(Math.random() * arrTwo.length)]
// }
// if (uppercaseElem) {
//   choices[Math.floor(Math.random() * arrThree.length)]
// }
// if (specialCharactersElem) {
//   choices[Math.floor(Math.random() * str.length)]
// }
// return newPassword


// if ($('#atLeast :checked').length == 0) {
//   alert("Pick at least one criteria to include in generated password.");
// }

// let checked = $('#atLeast').find(':checked').length;
// if (!checked)
//   alert('Pick at least one criteria to include in generated password');



// document.getElementById("password").value = password;

//  let userPassword = alert("Fill out criteria for your generated password using boxes below.");
// function promptMe() {
//   document.getElementById("eight").style.display = "block";
// }
// function promptMe() {
//   let length = document.getElementById("input").value;
// }

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", () => );

// const input = document.getElementById('input')
// const div = document.getElementById("entireCard")
// const numbersElem = document.getElementById("numbers")
// const lowercaseElem = document.getElementById("lowercase")
// const uppercaseElem = document.getElementById("uppercase")
// const specialCharactersElem = document.getElementById("specialCharacters")
// div.addEventListener('generate', (event) => {
//   event.prevent default ()