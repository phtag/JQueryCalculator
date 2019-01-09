
$(document).ready(function() {
    var operators = ["plus", "minus", "divide", "times", "power"];
    var operatorSymbols = ["+", "-", "÷", "x", "^"];
    // Your code here...
    var firstNumber = $("#first-number");
    var secondNumber = $("#second-number");
    var operator = $("#operator");
    var result = $("#result");
    operator.text == "";

    $(".number").on("click", function(){
        var buttonValue = $(this).val();
        if (operator.text()==="") {
            firstNumber.append(buttonValue);
        } else {
            secondNumber.append(buttonValue);
        }
    });

    $(".operator").on("click", function(){
        // update the displayed operator expression
        var buttonValue = $(this).val();
        operator.text(operatorSymbols[operators.indexOf(buttonValue)]);
        result.text("");    // clear out the result
     });

    $(".equal").on("click", function(){
        // Convert the two numbers to numeric values
        var firstNumber = $("#first-number").text();
        var secondNumber = $("#second-number").text();
        if (operators[operatorSymbols.indexOf(operator.text())] ==="plus") {
            var strResult = parseInt(firstNumber) + parseInt(secondNumber);
        } else if (operators[operatorSymbols.indexOf(operator.text())] ==="minus") {
            var strResult = parseInt(firstNumber) - parseInt(secondNumber);
        } else if (operators[operatorSymbols.indexOf(operator.text())] ==="divide") {
            var strResult = parseInt(firstNumber) / parseInt(secondNumber);
        } else if (operators[operatorSymbols.indexOf(operator.text())] ==="times") {
            var strResult = parseInt(firstNumber) * parseInt(secondNumber);
        } else if (operators[operatorSymbols.indexOf(operator.text())] ==="power") {
            var strResult = Math.pow(firstNumber, parseInt(secondNumber));
        }
        result.text(strResult);
    });

    $(".clear").on("click", function(){
        $("#first-number").text("");
        $("#second-number").text("");
        $("#operator").text("");
        $("#result").text("");
     });

});