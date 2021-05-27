// Assignment Code
var generateBtn = document.querySelector("#generate");

// STARTING DATA 
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var allData = lowerCaseLetters.concat(upperCaseLetters,numbers,specialCharacters);
// var allCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","_","+"];

// Functions
function generatePassword() {
var allCharacters = [];
var finalPassWord = "";
var passWordLength = prompt("How many characters would you like your password to contain?");

if ( passWordLength <8 || passWordLength>128){
  alert("Password must be between 8 and 128 characters.");
}
else {
  if (confirm("Do you want lower case letters?")){
    Array.prototype.push.apply(allCharacters,lowerCaseLetters ) 
  }
  if (confirm("Do you want upper case letters?")){
    Array.prototype.push.apply(allCharacters, upperCaseLetters) 
  }
  if (confirm("Do you want numbers?")){
    Array.prototype.push.apply(allCharacters, numbers) 
  }
  if (confirm("Do you want special characters")){
    Array.prototype.push.apply(allCharacters, specialCharacters) 
  }
  if(allCharacters.length===0){
    alert("You must select at least one (1) type of character for your password");
  }
  else{
    for(var i=0; i<passWordLength; i++){
      var random = Math.floor(Math.random()*allCharacters.length);
      finalPassWord += allCharacters[random];
  }
}
}
return finalPassWord;
}
// var lowerCaseLetters = confirm("Do you want lower case letters?")
// var upperCaseLetters = confirm("Do you want upper case letters?")
// var numbers = confirm("Do you want numbers?")
// var specialCharacters = confirm("Do you want special characters?")
    // get the user's choice
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
