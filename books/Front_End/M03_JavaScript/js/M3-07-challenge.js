var upperCase;
var lowerCase;
var numbersQuesadilla;
var specialCharactersTaco;
let specialCharacters = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","?",">","<","/"];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];
let upperCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let lowercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let specialCharactersAndNumbers = specialCharacters.concat(numbers);
let allLetters = upperCaseLetters.concat(lowercaseLetters);
generatePassword = function() {
    generatePopup = parseInt(prompt('How many characters long do you want your password to be? Please enter a numeric value between 8 and 128.'));
    while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
        alert('Please enter a number between 8 and 128');
        generatePopup = parseInt(prompt('How many character long do you want your password to be? Please enter a numeric value between 8 and 128'));
    }
    if (generatePopup) {
        upperCase = confirm('Do you want UPPERCASE letters?');
        console.log(upperCase);
        lowerCase = confirm('Do you want lowercase letters?');
        console.log(lowerCase);
        numbersQuesadilla = confirm('Do you want numbers');
        console.log(numbersQuesadilla);
        specialCharactersTaco = confirm('Do you want special characters?');
        console.log(specialCharactersTaco);
    }
    if (!upperCase && !lowerCase && !specialCharactersTaco) {
        userSelction = alert("You entered no values, we can't make a password without values!");
    }
    else if (upperCase && lowerCase && numbersQuesadilla && specialCharactersTaco) {
        userSelction = numbers.concat(specialCharacters, lowercaseLetters, upperCaseLetters);
    }
    else if (upperCase && lowerCase && numbersQuesadilla) {
        userSelction = numbers.concat(lowercaseLetters, upperCaseLetters);
    }
    else if (upperCase && lowerCase && specialCharactersTaco) {
        userSelction = specialCharacters.concat(lowercaseLetters, upperCaseLetters);
    }
    else if (upperCase && numbersQuesadilla && specialCharactersTaco) {
        userSelction = numbers.concat(specialCharacters, upperCaseLetters);
    }
    else if (lowerCase && numbersQuesadilla && specialCharactersTaco) {
        userSelction = numbers.concat(specialCharacters, lowercaseLetters);
    }
    else if (upperCase && lowerCase) {
        userSelction = upperCaseLetters.concat(lowercaseLetters);
    }
    else if (upperCase && numbersQuesadilla) {
        userSelction = upperCaseLetters.concat(numbers);
    }
    else if (upperCase && specialCharactersTaco) {
        userSelction = upperCaseLetters.concat(specialCharacters);
    }
    else if (numbersQuesadilla && lowerCase) {
        userSelction = numbers.concat(lowercaseLetters);
    }
    else if (specialCharactersTaco && lowerCase) {
        userSelction = specialCharacters.concat(lowercaseLetters);
    } 
    else if (specialCharactersTaco && numbersQuesadilla) {
        userSelction = specialCharacters.concat(numbers);
    }
    else if (numbersQuesadilla) {
        userSelction = numbers;
    }
    else if (specialCharactersTaco) {
        userSelction = specialCharacters;
    }
    else if (lowerCase) {
        userSelction = lowercaseLetters;
    }
    else if (upperCase) {
        userSelction = upperCaseLetters;
    }
    let emptyArray = [];
    for (let i = 0; i < generatePopup; i++) {
        console.log(userSelction);
        var mermaidSelection = userSelction[Math.floor(Math.random() * userSelction.length)];
        emptyArray.push(mermaidSelection);
    }
    console.log(emptyArray.join(''));
    return (emptyArray.join(''));
}
var generateBtn = document.querySelector("#generate");
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);