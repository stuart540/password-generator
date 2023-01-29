// User story: I want to ba able to generate a random password with the flexibility to select variables of length and complexity from an easy to use interface.

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

// Array to hold user selected characters
var generatorArr = []
// String to hold generated password
var password = ""
var values = { 
  characterSet: [specialCharacters, numericCharacters, upperCasedCharacters, lowerCasedCharacters],
  promptName: ["special", "numeric", "lower", "upper"]
  
}

// Function for getting a random character from an array
var getRandom = function(arr) {
  return arr = [Math.floor(Math.random() * arr.length)];
    }
  
var generatePassword = function() {
  // Function to prompt for password length
    var getPasswordLength = function() {
    var passwordLength = parseInt(prompt("Please select the required length of the password, or leave blank to set to the default of 10", "10 - 64"));
    // to clear array with each cycle of the function
    generatorArr.length = 0;
    if (passwordLength >= 10 && passwordLength <= 64) {
      passwordOptions(passwordLength)
      return passwordLength
    }
    
    else {
    alert("Please google 'how to count above 10 with socks on', then try again with a number between 10 and 64 inclusive.");
    getPasswordLength()
    }
  }

  getPasswordLength()

  // Function to prompt user for password options, and add the selected characters to an array 
  function passwordOptions(num) {
    for (var i = 0; i < values.characterSet.length; i++) {
      var text = "Does your password require " + values.promptName[i] + " characters?\nOk for yes, Cancel for no.";
      if (confirm(text)) {
      generatorArr = generatorArr.concat(values.characterSet[i]);
      
      }

      // Loop to select random characters from array
      if ([i] == values.characterSet.length - 1 && generatorArr.length !== 0) {
        alert("Making password... this may take a while");
        alert("Seriously, this is the first time the developer has used functions. You should probably make a coffee and come back in 5.");
        // To clear the password with each cycle
        password = ""
        for (var i = 0; i < num; i++) {
          password += generatorArr[getRandom(generatorArr)];
        }
      }

      else if ([i] == values.characterSet.length - 1 && generatorArr.length === 0) {
        alert("You must select at least one type of character");
        passwordOptions(num)

      }
    }
  }
  return password
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
