// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Elements in password
var char = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~/`|}{[]:;?><,./-='

}

// Function to generate password
function generatePassword() {
  var passLength = parseInt(prompt('How long should the password be?'));
  if(passLength < 8) {
    alert('The password must be at least 8 characters');
    return;
  }
  if (passLength > 128){
    alert('The password must be less than 128 characters');
    return;
  }
    var includeUpper = confirm('Would you like to include upper case letters?');
    var includeLower = confirm('Would you like to include lower case letters?');
    var includeNumbers = confirm('Would you like to include numbers?');
    var includeSymbols = confirm('Would you like to include symbols?');

    if (!includeUpper && !includeLower && !includeNumbers && !includeSymbols){
      alert('You must choose at least one uppercase letter, lowercase letter, number or symbol character');
      return;
    }
  }


  //var passLength = getPassLength();
  //var charPool = getCharPool();
  //var password = buildPassword(passLength, charPool);
  //return password;
//};

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