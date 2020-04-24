var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => );

const genLength = parseInt(prompt("Choose a length for your password between 8-128 characters."));
if (genLength < 8 || genLength > 128) {
  alert("Please choose a number between 8 and 128.")
  return
}

const strOne = '0 1 2 3 4 5 6 7 8 9'
const strTwo = 'abcdefghijklmnopqrstuvwxyz'
const strThree = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const strFour = "!#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"
let newPassword = ' '
const numbersElem = confirm("Would you like numbers in your password?")
const lowercaseElem = confirm("Would you like lowercase letters in your password?")
const uppercaseElem = confirm("Would you like uppercase letters in your password?")
const specialCharactersElem = confirm("Would you like special characters in your password?")
let passwordPlace = ' '

if (!lowercaseElem && !uppercaseElem && !numbersElem && !specialCharactersElem) {
  alert("Choose at least one criteria to generate password.")
  return
}

if (numbersElem) {
  passwordPlace += strOne;
}
if (lowercaseElem) {
  passwordPlace += strTwo;
}
if (uppercaseElem) {
  passwordPlace += strThree;
}
if (specialCharactersElem) {
  passwordPlace += strFour;
}

for (let i = 0; i < genLength.length; i++) {
  let chosen = Math.floor(Math.random() * passwordPlace.length)
  newPassword += passwordPlace[chosen]
}
return newPassword
}