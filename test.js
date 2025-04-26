var equationString = "12+5+8-9*0/6+";

var operators = ["+", "-", "*", "/"];

var lastCharacter = equationString.slice(-1);

if (operators.includes(lastCharacter)) {
    console.log("yes");
    
} else {
    console.log("no");
    
}