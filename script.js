// User story: I want to ba able to generate a random password with the flexibility to select variables of length and complexity from an easy to use interface.

// As a developer I want to create a password generator with easy to understand code, preferable modular to improve readability and allow for modifications.

// * Parameters of the password length are between 10 and 64 characters - Check for this at the end?
// * Password must have options for selecting; Special characters, Numeric characters, Uppercase and Lowercase characters

// First a prompt() should be displayed on the page to request the desired password length - between 10 and 64 characters.
// if input !== 10 - 64 then alert("Please see resource, how to count above 10 with socks on") and loop until true. This should also catch any other characters like symbols and letters.

// Next a confirm() should offer to include a type of character, if true then add to an array, else move to next character.
// After the 4 character options have been offered and decided, a check should run to make sure at least one type of character was selected.
// i.e. if var1 || var2 || var 3 || var 4 === true then proceed, else alert("you must select at least one character type")

// Once user has selected the characters, the family of characters could be moved into a new array called passwordGen, a random selection can then run through all the options until password length === user selected length.
// after the password has been generated to the correct length, it should then be checked it has all the requested variables in: if true, then output to user, else run generator again.


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

console.log(upperCasedCharacters);

// Function to prompt for password input
function getPasswordLength() {
  var passwordLength = prompt("Please select the required length of the password", "10 - 64");
  if (passwordLength >= 10 && passwordLength <= 64) {
    specialCharactersFunction()
    numericCharactersFunction()
    lowerCasedCharactersFunction()
    upperCasedCharactersFunction()
  }
    else
      alert("Please google 'how to count above 10 with socks on', then try again with a number between 10 and 64 inclusive.");
      getPasswordLength()
  }

// Function to prompt user for password options
function getPasswordOptions() {
  
  
}

function specialCharactersFunction() {
  let text = "Does your password require special characters?\nOk for yes, Cancel for no.";
  if (confirm(text) == true) {
    // move selected to arr
  }
}

function numericCharactersFunction() {
  let text = "Does your password require numeric characters?\nOk for yes, Cancel for no.";
  if (confirm(text) == true) {
    // move selected to arr
  }
}

function lowerCasedCharactersFunction() {
  let text = "Does your password require lower cased characters?\nOk for yes, Cancel for no.";
  if (confirm(text) == true) {
    // move selected to arr
  }
}

function upperCasedCharactersFunction() {
  let text = "Does your password require upper cased characters?\nOk for yes, Cancel for no.";
  if (confirm(text) == true) {
    // move selected to arr
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);