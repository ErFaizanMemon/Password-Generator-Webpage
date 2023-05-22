
var generateBtn = document.querySelector("#generate");
var pwd = String;
// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("How many characters would you like your password to contain? (8-128)");

    // Validate password length
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid password length (between 8 and 128 characters).");
        return;
    }

    var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
    var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
    var includeNumeric = confirm("Would you like to include numbers in your password?");
    var includeSpecial = confirm("Would you like to include special characters in your password?");

    // Validate at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("Please select at least one character type to include in your password.");
        return;
    }

    var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var allowedChars = "";
    if (includeLowercase) {
        allowedChars += lowercaseChars;
    }
    if (includeUppercase) {
        allowedChars += uppercaseChars;
    }
    if (includeNumeric) {
        allowedChars += numericChars;
    }
    if (includeSpecial) {
        allowedChars += specialChars;
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }

    return password;

}