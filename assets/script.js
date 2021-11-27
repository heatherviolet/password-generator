// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

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
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var resultArray = [];
var userArray = [];

uppercaseArray [1]
  

  var numbers = confirm ("Would you like numbers in the password?");
  var uppercases = confirm ("Would you like uppercase letters in the password?");
  var lowercases = confirm ("Would you like lower case letters in the password?");
  var characters = confirm ("Would you like symbols in the password?");


