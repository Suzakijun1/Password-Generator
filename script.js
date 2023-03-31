// Assignment Code

//Variables to store all character types chosen
var lowercaseCharacters = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var uppercaseCharacters = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z");
var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_{|}~"; //Don't need to put commas after each variable
var numberCharacters = "1234567890";

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Write the generatePassword() function
function generatePassword() {
  passwordLength = parseInt(prompt("Enter the length of your password (must be between 8 and 128)")); //parseInt takes a string as input and returns an integer
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { //isNaN = is Not a Number, this will return true or false.
    alert("Sorry! The password length must be a number between 8 - 128. Please try again.");
    return "";
  }
//Asking lowercase letters
const confirmLowercaseCharacters = confirm("Do you want to add lowercase letters?");
//Asking uppercase letters
const confirmUppercaseCharacters = confirm("Do you want to add uppercase letters?");
//Asking special characters
const confirmSpecialCharacters = confirm("Do you want to add special characters?")
//Asking number characters
const confirmNumberCharacters = confirm("Do you want to add numbers?")

//
if (!confirmLowercaseCharacters && !confirmUppercaseCharacters && !confirmNumberCharacters && !confirmSpecialCharacters) {
  alert("At least one character type must be selected.");
  return;
}

let validCharacters = ""; ////"" is an empty string, used as a starting point
if (confirmLowercaseCharacters) {
  validCharacters += lowercaseCharacters;
}
if (confirmUppercaseCharacters) {
  validCharacters += uppercaseCharacters;
}
if (confirmNumberCharacters) {
  validCharacters += numberCharacters;
}
if (confirmSpecialCharacters) {
  validCharacters += specialCharacters;
}
//produces the random password
let password = "";
for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * validCharacters.length);
  password += validCharacters.charAt(randomIndex);
}
return password;

}
