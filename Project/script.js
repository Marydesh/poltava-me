// Assignment code here

//declaring variables to wokr with in this application
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var finalPassword = '';

function generatePassword() {
  //first promt for the password length, parseInt to change the password string to a number - reference https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
  var length = parseInt(prompt("How long do you want your password to be? Insert the desired number of characters"), 10);

  if (length < 8) {
    alert("Please choose more than 8 characters"); //each alert pops up if the password criteria is not met 
    return;
  }
  if (length > 128) {
    alert("Please choose less than 128 characters");
    return;
  }

  if (isNaN(length)) {
    alert("Please enter a valid number for the password length.");
    return;
  }
  // to display a set of confirmation boxes - used the following page to capture knowledge- https://www.w3schools.com/jsref/met_win_confirm.asp
  var includeLowercaseLetters = confirm("Do you want to include lowercase characters into your password ? ");
  if (includeLowercaseLetters === true) {
    finalPassword += lowercaseLetters;
  }

  var includeUppercaseLetters = confirm("Do you want to include uppercase characters into your password ? ");
  if (includeUppercaseLetters === true) {
    finalPassword += uppercaseLetters;
  }
  var includeNumericChar = confirm("Do you want to include numeric characters into your password ? ");
  if (includeNumericChar === true) {
    finalPassword += numericChar;
  }
  var includeSpecialChar = confirm("Do you want to include special characters into your password ? ");
  if (includeSpecialChar === true) {
    finalPassword += specialChar;
  }
  if (finalPassword.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  var password = '';
  //for loop to generate the random the password from the charachters included into the finalPassword string including all the characters outlined above.
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * finalPassword.length);
    password += finalPassword.charAt(randomIndex); 
  }
// my tutor Kellie Kumasaka helped me with the above for loop  and to define the scructure of this application in general.
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //at the end if the func return a string value
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
