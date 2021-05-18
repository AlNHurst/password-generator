// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase();
var numbers = "0123456789";
var specialcharacters = "!@#$%^&*()+~.><";

var generateBtn = document.querySelector("#generate");
console.log(lower[1], lower.length, lower.concat(upper)); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return "GET SOMETHING BACK";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
