// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Placed backslash before " to escape the quotation mark that needed to be included as special character.

var generateBtn = document.querySelector("#generate");
console.log(lower[1], lower.length, lower.concat(upper));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// function to prompt user for password length and character type. 

function generatePassword() {
  var characterLength = parseInt(prompt("Please enter your desired password length. It should be between 8 and 128 characters."));
  var passwordString = "";

  var possibleCharacters = "";

  // requiredCharacters + variable uses Math.random to generate random characters. Math.floor rounds down to an integer. 
  var requiredCharacters = "";

  if (characterLength >= 8 && characterLength <= 128) {
    var isLowerCase = confirm("Would you like lowercase letters? Click OK to confirm.");
    var isUpperCase = confirm("Would you like uppercase letters? Click OK to confirm.");
    var isNumbers = confirm("Would you like numeric characters? Click OK to confirm.");
    var isSpecialCharacters = confirm("Would you like special characters? Click OK to confirm.");

    if (isLowerCase) {
      possibleCharacters += lower;
      requiredCharacters += lower[Math.floor(Math.random() * lower.length)];
    }

    if (isUpperCase) {
      possibleCharacters += upper;
      requiredCharacters += upper[Math.floor(Math.random() * upper.length)];
    }

    if (isNumbers) {
      possibleCharacters += numbers;
      requiredCharacters += numbers[Math.floor(Math.random() * numbers.length)];
    }

    if (isSpecialCharacters) {
      possibleCharacters += specialCharacters;
      requiredCharacters += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

    //for loop through entire function for each character type
    for (var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      console.log(randomIndex, possibleCharacters[randomIndex]);
      passwordString += possibleCharacters[randomIndex];
    }

    // else alert if 8-128 characters are selected by user. 
  } else {
    alert("Please enter a password length that is between 8 and 128 characters. Click Generate Password to restart. Thank you!");
  }

  return passwordString.substr(requiredCharacters.length) + requiredCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
