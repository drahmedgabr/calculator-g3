const resultDiv = document.getElementById("resultDiv");
var equationString = "";
var operators = ["+", "-", "×", "÷"];

function addNumber(number) {

    var lastCharacter = equationString.slice(-1);

    if (operators.includes(lastCharacter) && operators.includes(number)) {
        deleteNumber();
    }

    equationString = equationString + number;
    resultDiv.innerText = equationString;
}

function calculateResult() {
    equationString = equationString.replaceAll("×", "*");
    equationString = equationString.replaceAll("÷", "/");
    const result = eval(equationString);
    equationString = result + "";
    resultDiv.innerText = result;
}

function clearScreen() {
    equationString = "";
    resultDiv.innerText = 0;
}

function deleteNumber() {
    equationString = equationString.slice(0, -1);
    if (equationString == "") {
        resultDiv.innerText = 0;
    } else {
       resultDiv.innerText = equationString; 
    }
    
}