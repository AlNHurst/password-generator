// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "~`!@#$%^&*()_+=|}{\][;':,./<>?";

var generateBtn = document.querySelector("#generate");
console.log(lower[1], lower.length, lower.concat(upper));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterLength = parseInt(prompt("Please enter your desired password length. It should be between 8 and 128 characters."));
  var passwordString = "";
  var possibleCharacters = "";
  var requiredCharacters = "";

  if (characterLength >= 8 && characterLength <= 128) {
    var isLowerCase = confirm("Would you like lowercase letters? Click OK to confirm.");
    var isUpperCase = confirm("Would you like uppercase letters? Click OK to confirm.");
    var isNumbers = confirm("Would you like numeric characters? Click OK to confirm.");
    var isSpecialCharacters = confirm("Would you like special characters? Click OK to confirm.");

  } else {
    alert("Please enter a password length that is between 8 and 128 characters. Click Generate Password to restart. Thank you!");
  }

  return passwordString.substr(requiredCharacters.length) + requiredCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
