const resultDiv = document.getElementById("resultDiv");
var equationString = "";

function addNumber(number) {
    equationString = equationString + number;
    resultDiv.innerText = equationString;
}

function calculateResult() {
    const result = eval(equationString);
    resultDiv.innerText = result;
}