// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Write the generatePassword() function
function generatePassword() {
  passwordLength = prompt("Do")
}
//Asking lowercase letters
lowercaseCharacters = confirm("Do you want to add lowercase letters?");
//Asking uppercase letters
uppercaseCharacters = confirm("Do you want to add uppercase letters?")

//Prompt for password criteria
window.prompt("Enter the length of your password (must be between 8 and 128");



//Validation that correct password length is chosen
if (passwordLength < 8 ) {
  alert ("You're password must be at least 8 characters")
}else if (passwordLength > 128) {
  alert("Password length must be between 8 and 128 characters!")
} else {
  alert("Your new password has been created!");
}


// isNaN(passwordLength)) {



//Variables to store all character types chosen
var lowercaseCharacters = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var uppercaseCharacters = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z");
var specialCharacters = "!@#$%^&*()_-+=[{]}\|;:',<.>/?~`";
var numberCharacters = "1234567890";



// Write the generatePassword() function

var passwordLength;
var lowercase;
var num;
var speical;

function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







//Display Password
alert("Your password is: " + password);