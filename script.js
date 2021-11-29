// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Asks how long the user would like the password to be between 8-128 characters
var passLength = parseInt(prompt('How long should the password be?')); 
if (passLength < 8) {
  alert('The password must be at least 8 characters!');
  return;
}
if (passLength > 128) {
  alert('The password must be less than 128 characters!');
  return;
}

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var resultArray = [];
var userArray = [];

uppercaseArray [1]
  

  var number = confirm ("Would you like numbers in the password?");
  var uppercase = confirm ("Would you like uppercase letters in the password?");
  var lowercase = confirm ("Would you like lower case letters in the password?");
  var symbol = confirm ("Would you like symbols in the password?");


// condition of the array

if (number){
  resultArray = resultArray.concat(numberArray);
  
}

if (uppercase){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercase){
  resultArray = resultArray.concat(lowercaseArray);

}

if (symbol){
  resultArray = resultArray.concat(symbolArray);
}
console.log(resultArray)


for (var i = 0; i < passLength; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);