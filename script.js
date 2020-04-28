var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = parseInt(prompt("Choose a length for your password between 8-128 characters."));
  while (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.")
    return
  }

  const strOne = '0123456789'
  const strTwo = 'abcdefghijklmnopqrstuvwxyz'
  const strThree = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const strFour = "!#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"
  let newPassword = ' '
  const numbersElem = confirm("Would you like numbers in your password?")
  const lowercaseElem = confirm("Would you like lowercase letters in your password?")
  const uppercaseElem = confirm("Would you like uppercase letters in your password?")
  const specialCharactersElem = confirm("Would you like special characters in your password?")
  let passwordPlace = ' '

  if (lowercaseElem === false && uppercaseElem === false && numbersElem === false && specialCharactersElem === false) {
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
  console.log('passwordPlace: ', passwordPlace)
  for (let i = 0; i < length; i++) {
    let chosen = Math.floor(Math.random() * passwordPlace.length)
    newPassword += passwordPlace[chosen]
  }
  console.log('newPassword: ', newPassword)
  document.getElementById('password').value = newPassword
})

