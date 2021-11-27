// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Define password elements
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";

function elementPrompt(){
  var passLength = parseInt(prompt('How long should the password be?'));
  if(passLength > 8 && passLength <128){

  }
}

// Function to generate password
function generatePassword(){
  var passLength = getPassLength();
  var charPool = getCharPool();
  var password = buildPassword(passLength, charPool);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// DOM elements
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);