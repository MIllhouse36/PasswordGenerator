//Access DOM
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Make an Object out of functions
const randoObj = {
    confirmLowercase :funcLower,
    confirmUppercase :funcUpper,
    confirmNumbers : funcNumber,
    confirmSymbols : funcSymbol,
}

// Write password to the #password input
let promptLength =[];

function writePassword() {
    promptLength = +prompt("Pick a password length between 8-128");
    const confirmLowercase = confirm("include Lowercase characters?");
    const confirmUppercase = confirm("include Uppercase characters?");
    const confirmNumbers = confirm("include Number characters?");
    const confirmSymbols = confirm("include Symbol characters?");
    const choseChr = confirmLowercase + confirmUppercase + confirmNumbers + confirmSymbols;
    const choseArr = [{confirmLowercase} , {confirmUppercase} , {confirmNumbers} , {confirmSymbols}].filter(jawn => Object.values(jawn)[0]);
    var password = "";
    var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
    if(choseChr === 0){
            alert ("Ayo! you must confirm at least one character type!");
    }
        
    for (let i=0; i<promptLength; i += choseChr){
            choseArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                password += randoObj[funcName]();
        });
    }      
}

function funcLower (){
    return String.fromCharCode(Math.floor(Math.random()* 26)+97);
}

function funcUpper (){
    return String.fromCharCode(Math.floor(Math.random()* 26)+65);
}

function funcNumber (){
    return String.fromCharCode(Math.floor(Math.random()* 10)+48);
}
function funcSymbol (){
    const symbols = "!@#$%^&*()=+_-"
    return symbols [Math.floor(Math.random()*symbols.length)];
}

