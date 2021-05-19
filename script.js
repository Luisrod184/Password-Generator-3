// Assignment Code
var generateBtn = document.querySelector("#generate");

// STARTING DATA 

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+"];
// var allCharacters = lowerCaseLetters.concat(upperCaseLetters,numbers,specialCharacters);

// Functions
function generatePassword() {
  prompt("How many characters would you like your password to be?");







   // get the user's choices
    // how long do you want the password to be?
      // less than 8 or more than 128
        // say try again
      // store their choice
    // do you want uppercase letters? store the choice
    // do you want lowercase letters? store the choice
    // do you want numbers? store the choice
    // do you want special characters? store the choice
  // combine the chosen arrays into larger array
  // randomly choose characters from the combined array and add them to a string called password
  // Last step 
  // return a password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
