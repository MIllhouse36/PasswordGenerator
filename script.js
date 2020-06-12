//Access DOM
var generateBtn = document.querySelector("#generate");



//Make an Object out of functions
const randoObj = {
    Lowercase :funcLower,
    Uppercase :funcUpper,
    Numbers : funcNumber,
    Symbols : funcSymbol,
}

// Write password to the #password input

function writePassword() {
const promptLength = +prompt("Pick a password length between 8-128");
const confirmLowercase = confirm("include Lowercase characters?");
const confirmUppercase = confirm("include Uppercase characters?");
const confirmNumbers = confirm("include Number characters?");
const confirmSymbols = confirm("include Symbol characters?");

  var password = generatePassword(hasLowercase, hasUppercase, hasNumbers, hasSymbols, length);{
      const choseChr = Lowercase + Uppercase + Numbers + Symbols;
      const choseArr = [{Lowercase} + {Uppercase} + {Numbers} + {Symbols}].filter(jawn => Object.value(jawn)[0]);
  }
      if(choseChr === 0){
          alert ("Ayo! you must confirm at least one character type!");
      }
      for (let i=0; i<length; i += choseChr){
          choseArr.forEach(type => {
              const funcName = Object.keys(type)[0];
              password += randoObj[funcName]();
          });
      }
    
  
  var passwordText = document.querySelector("#password");{
      return passwordText
  }

  passwordText.value = password.slice(0,length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
    const length = promptLength;
    const hasLowercase = confirmLowercase;
    const hasUppercase = confirmUppercase;
    const hasNumbers = confirmNumbers;
    const hasSymbols = confirmSymbols
}

function funcLower (){
    return String.fromCharCode(math.floor(math.random()* 26)+97);
}

function funcUpper (){
    return String.fromCharCode(math.floor(math.random()* 26)+65);
}

function funcNumber (){
    return String.fromCharCode(math.floor(math.random()* 10)+48);
}
function funcSymbol (){
    const symbols = "!@#$%^&*()=+_-"
    return symbols [Math.floor(math.random()*symbols.length)];
}

